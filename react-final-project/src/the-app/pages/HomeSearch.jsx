import { useForm } from "react-hook-form";
import {useState, useEffect} from "react"
import { SongCard } from "./components/SongCard";
import { SongList } from "./components/SongList";
import searchArrow from "../images/search-arrow.svg"
import "./homesearch-styles.css"
import HomeDescription from "./components/HomeDescription";

export function HomeSearch(){

 
    /*States*/
    const [searchInput, setSearchInput ] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [dataTrack, setDataTrack] = useState([]);//to save the data we get
    const [trackList, setTrackList] = useState([]); //to set in an array every track we list
    const [isShown, setIsShown] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(false);
    const [showIsEmpty, setShowIsEmpty] = useState(false);

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
       // console.log("Buscaste: "+ input);
      //  console.log("su length es de:"+ input.length);

    //get request to get track you input
    var trackParameters = {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken 
        }                  
    }

    //GET ID TRACK 
    var IDTrack = await fetch("https://api.spotify.com/v1/search?q="+ input + "&type=track", trackParameters)
        .then(response => response.json() )
        .then(data => {            
            return (
            data.tracks?.items[0]?.id
        //    setIsLoading(false)
        );
        });
        if( IDTrack === undefined  ){
            setErrorMessage("We couldn't find an artist or song, please try with other title");
            setIsShown(false);
            return;
        }else{
         
        
      //  console.log("el IDTrack es: "+ IDTrack);
              

//GET DATA OF THE SEARCHED TRACK
    var returnedDataTrack = await fetch("https://api.spotify.com/v1/search?q="+ input + "&type=track", trackParameters)
        .then(response => response.json() )                        
        .then( data => {
            setDataTrack(data?.tracks?.items[0]);
          //  console.log(data.tracks.items[0])
            setShowError(false);
            setIsShown(true); //only show element on click, show most up to date state
        }   
        );  
    }//end of GET ID TRACK 


//GET RECOMMENDATIONS BASED ON IDTRACK that you searched ;)
    var returnedTrackList = await fetch("https://api.spotify.com/v1/recommendations?limit=10&seed_tracks="+ IDTrack, trackParameters)
        .then(response => response.json() )
        .then(data => {
          // console.log("tracklist: ")
           // console.log( data.tracks)
            setTrackList(data.tracks) 
            setShowIsEmpty("We couldn't find recommendations for this"); 
        }
        
    )
    
} //end searchTrack method


    //to catch the input introduced
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) =>{
    
       document.getElementById("searchInput").value = "";
        
       if(data.searchInput.trim().length <=0) return; 

        searchTrack(data.searchInput);

    }

    // const [value, setValue] = useState("");

    //  const algo = (e) => {
    //     setValue(e.target.value);
    //     handleSubmit(onSubmit(value));
    //  }


    return(
    <>
<div className="container-fluid cont">

{ !isShown ? <HomeDescription/> : null }

    <div className="row roww">
        <div className="col">
            <form className="form-container">               
                 <input 
                    className="song-form "
                    type="text"
                    id="searchInput"
                    placeholder="Search a song"
                    aria-invalid={errors.searchInput ? "true" : "false"}
                    {...register("searchInput", { required: true } )}  
                 />                            
                {/* que el boton aparezca cuando haya texto */}
                    <button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                 >
                    <img src={searchArrow}></img>
                 </button>
                
            </form>  
        </div>
        <div className="row">
            <div className="col">
            {errors.searchInput && errors.searchInput.type === "required" && 
                (<span role="alert" className='text-danger'>You need to type a song and/or artist</span>)
            }
            </div>
        </div>

   </div>
    
    {/* row para el error sign */}
    <div className="row">
        <div className="col col-nosongs">
        {  //if showError is false, show the SongCard  
            !showError && isShown 
            ?  ( isShown && <SongCard dataTrack={dataTrack} />)
            :  //else, the search wasn't found, show the error 
            (errorMessage && <div className="text-danger"> {errorMessage}  </div> )     
        } 
        </div>
    </div>


 </div>   
    
<div className="container-fluid cont">
    { //if there isn't a song card there's no songlist, then don't show songlist
        
        !isShown && showIsEmpty ?  
        
        trackList.length ===0 :  //and if song list doesnt show, dont send the trackList data
            trackList.length ===0 ? (showIsEmpty && <div className="error"> {showIsEmpty} </div>)
       
        :   //else, trackList does have items, then send data and show results :)
        
        trackList.map( (trackList)=>{ //each item in trackList will go to a "list item" in SongList
            return(        
                <SongList  trackList={trackList} key={trackList.id.toString()} />               
          )
         } 
        )
    }
</div>
  {/* </div>   */}
 
    </>
    )
}