import { useForm } from "react-hook-form";

import {useNavigate, Outlet} from "react-router-dom"
import {useState, useEffect} from "react"
import { SongCard } from "./components/SongCard";
import {SongList} from "./components/SongList";

import {ErrorNoIDTrack} from "./components/ErrorNoIDTrack";

import "./searchbar-styles.css"

import {pass} from "../pass.js"

//import { AudioPlayer } from "./components/AudioPlayer";

//padre de SongCard... 
export function SearchBar(){

    /*Navigation*/
    const navigate = useNavigate();

    /*States*/
    const [searchInput, setSearchInput ] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [dataTrack, setDataTrack] = useState([]);//to save the data we get
    const [trackList, setTrackList] = useState([]); //to set in an array every track we list
    const [isShown, setIsShown] = useState(false);

 
    /*ID's spotify api*/
 //    pass.CLIENT_ID;
 //   const CLIENT_SECRET= "4910e0a550d5422495e6cc4ff6fa1af0";

    /*API access token*/
    useEffect( ()=>{
    var authParameters = { //this gives the specific rules for the fetch
           method:"POST",
           headers: {
               "Content-Type": "application/x-www-form-urlencoded"
           },
           body:"grant_type=client_credentials&client_id=" + pass.CLIENT_ID+ "&client_secret="+pass.CLIENT_SECRET
    }

    const CheckError= (result)=>
    { 
        if (result.status >= 200 && result.status <= 299) {
            return result.json();
          } else {
            throw Error(result.statusText);
          }
    }

    fetch("https://accounts.spotify.com/api/token", authParameters) //make a call to this https using fetch
           
        /*consigue el json o si no lanzas el error*/
        .then(CheckError)
        .then(data => setAccessToken(data.access_token)) //we recieve the token we'll use to pull the spotify data, stored in accessToken 
        .catch(
            (error) => {

                console.log(error);
            }
        )   


    },[]) //run only once on first render
    
   useEffect( //si no tenemos un accessToken

    () =>{

        if(!accessToken) return

        setAccessToken(accessToken)
    },[accessToken]

   )

 

    /*SEARCH FUNCTION*/
    async function searchTrack(input){ //async bc we'll make a lot of search petitions to the api
            console.log("Buscaste: "+ input);
            console.log("su length es de:"+ input.length);

         //   console.log("hola desde searchTrack");

        //get request to get track you input
        var trackParameters = {
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken 
            }                  
        }


        let cancel= false;
    //GET ID TRACK - primero checas que el input no este feo
      if(input.length <= 0  || undefined){

        cancel=true;

        console.log("input vacio");
            return;
        //to cancel the request

       

   

      }else{
        var IDTrack = await fetch("https://api.spotify.com/v1/search?q="+ input + "&type=track", trackParameters)
            .then(response => response.json() )
            .then(data => {


             

                return (
                data.tracks?.items[0]?.id
               
            //    , data.tracks.items[1].id
            );
            });
            if( IDTrack === undefined  ) return;

            
            console.log("el IDTrack es: "+ IDTrack);

        //GET DATA OF THE SEARCHED TRACK
        var returnedDataTrack = await fetch("https://api.spotify.com/v1/search?q="+ input + "&type=track", trackParameters)
            .then(response => response.json() )
                        
            .then( data => {
                setDataTrack(data?.tracks?.items[0]);
                //console.log(data.tracks.items[0])
            }
        ); 
     
    }  
 


    let cancel2= false;

    if(IDTrack.length <= 0  || undefined){
        console.log("ID vacio") 
      
        cancel2=true;

      
            return;        

      }else{
        //GET RECOMMENDATIONS BASED ON IDTRACK that you searched ;)
        var returnedTrackList = await fetch("https://api.spotify.com/v1/recommendations?limit=10&seed_tracks="+ IDTrack, trackParameters)
            .then(response => response.json() )
            .then(data => {
               console.log("tracklist: ")
                console.log( data.tracks)
                setTrackList(data.tracks)
            }
            
        ) 
    }
        setIsShown(true); //only show element on click, show most up to date state
              
    } //end searchTrack method

    const showErrorMessage = () => {
        return(
     
            <ErrorNoIDTrack />
        )
    }
       

    //to catch the input introduced
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) =>{

       document.getElementById("searchInput").value = ""; // setSearchInput("")
        
       if(data.searchInput.trim().length <=0) return; 

        searchTrack(data.searchInput);

        console.log(data.searchInput);
    }

    return(
    <>
   
<form >
        <input 
            type="text"
            id="searchInput"
            placeholder="Search song"
            aria-invalid={errors.searchInput ? "true" : "false"}
            {...register("searchInput", { required: true } )}  
        />
        {errors.searchInput && errors.searchInput.type === "required" && 
    (<span role="alert" className='text-danger'>You need to type a song</span>)}

        <button
            className="search-button"
            type="submit"
            onClick={handleSubmit(onSubmit)}
        >
            Search
        </button>
    </form>
    {isShown &&   <SongCard dataTrack={dataTrack}/>
    
}

    <Outlet />

    { trackList.map( (trackList)=>{
        return(
         <SongList  trackList={trackList} key={trackList.id.toString()} />               
        )
       } 
      )
    }


        </>
    )
}
