import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import { SongCard } from "./components/SongCard";
import {SongList} from "./components/SongList";
import "./homesearch-styles.css"

export function SearchBar(){

    /*Navigation*/
    const navigate = useNavigate();

 
;
    /*States*/
    const [searchInput, setSearchInput ] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [dataTrack, setDataTrack] = useState([]);//to save the data we get
    const [trackList, setTrackList] = useState([]); //to set in an array every track we list
    const [isShown, setIsShown] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [id, setId] = useState("");

   const CLIENT_ID= "ae3ff2b95ca7497d81bf6f10c56325c7";
   const CLIENT_SECRET= "4910e0a550d5422495e6cc4ff6fa1af0";

    /*API access token*/
    useEffect( ()=>{
    var authParameters = { //this gives the specific rules for the fetch
           method:"POST",
           headers: {
               "Content-Type": "application/x-www-form-urlencoded"
           },
           body:"grant_type=client_credentials&client_id=" + CLIENT_ID+ "&client_secret="+CLIENT_SECRET
    }

    const CheckError= (result)=> { 
        if (result.status >= 200 && result.status <= 299) {
            return result.json();
          } else {
            throw Error(result.statusText);
          }
    }

        fetch("https://accounts.spotify.com/api/token", authParameters) //make a call to this https using fetch        
        .then(CheckError)/*consigue el json o si no lanzas el error*/
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

    //get request to get track you input
    var trackParameters = {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken 
        }                  
    }



//GET ID TRACK - primero checas que el input no este feo

    var IDTrack = await fetch("https://api.spotify.com/v1/search?q="+ input + "&type=track", trackParameters)
        .then(response => response.json() )
        .then(data => {            
            return (
            data.tracks?.items[0]?.id
        //    setIsLoading(false)
        );
        });
        if( IDTrack === undefined  ) return;
        
        console.log("el IDTrack es: "+ IDTrack);
      
        

//GET DATA OF THE SEARCHED TRACK
var returnedDataTrack = await fetch("https://api.spotify.com/v1/search?q="+ input + "&type=track", trackParameters)
        .then(response => response.json() )                        
        .then( data => {
            setDataTrack(data?.tracks?.items[0]);
            console.log(data.tracks.items[0])
            setIsShown(true); //only show element on click, show most up to date state
  
        }
    ); 
 
 





//GET RECOMMENDATIONS BASED ON IDTRACK that you searched ;)
 var returnedTrackList = await fetch("https://api.spotify.com/v1/recommendations?limit=10&seed_tracks="+ IDTrack, trackParameters)
        .then(response => response.json() )
        .then(data => {
           console.log("tracklist: ")
            console.log( data.tracks)
            setTrackList(data.tracks)
            
           
        }
       

    ) 

  /*  const tracklistEmpty = () =>{
    if( trackList.length === 0){
        console.log("tracklist vacio")
       return(
           <EmptyTracklist />
        )
    }}*/

   
} //end searchTrack method


const onNavigateHome = () =>{
    isShown(false)
    navigate("/")
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
    <div className="container">
      <div className="row home-row">
        <div className="col">
             <h1 className="home-greet"> Welcome to Benglofffyy!</h1>
        </div>
      </div>
        
      <div className="row home-row">
        <div className="col">
        <h4 className="home-description">Type an artist or a song and find song recommendations!   </h4>
        </div>
      </div>
    </div>

    

    <form>

    <div className="form-group col-6">
            <input 
           className="form-control"
                type="text"
                id="searchInput"
                placeholder="Search song"
                aria-invalid={errors.searchInput ? "true" : "false"}
                {...register("searchInput", { required: true } )}  
            />
            {errors.searchInput && errors.searchInput.type === "required" && 
        (<span role="alert" className='text-danger'>You need to type a song</span>)}
    </div>
    <div className="form-group">
        <button
            className="search-button btn col"
            type="submit"
            onClick={handleSubmit(onSubmit)}>
            Search
        </button>
    </div>
    </form>


   {
    isShown && <SongCard dataTrack={dataTrack} />    
    } 
  
{
     
       
     trackList.map( (trackList)=>{
        return(
        
         <SongList  trackList={trackList} key={trackList.id.toString()} />               
        )
       } 
      )
 
    }

    </>
    )
}