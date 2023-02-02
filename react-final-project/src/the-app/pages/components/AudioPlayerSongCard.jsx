import { useState, useRef, useEffect } from "react"; //useRef to grab the audioplayer and setup the reference
import {BsPlay} from "react-icons/bs"
import {BsPlayFill} from "react-icons/bs"
import {BsPause} from "react-icons/bs"
import "./audioplayer-styles.css"
import "./songlist-styles.css"

export function AudioPlayerSongCard({
    dataTrack, 
}) {
 
    //state
    const [isPlaying, setIsPlaying] = useState(false);
    const [isNull, setIsNull] = useState(false);
     
    const [songlist, setSonglist] = useState([]);

    //references
    const audioPlayer = useRef(); //reference for our audio component/ to use the play and pause methods for html DOM element
    const buttonPressed = useRef();

    useEffect(
        () =>{
            if(dataTrack.preview_url == null ){ //if there's no preview, isNull =true, show message
           //     console.log(isNull)
                    setIsNull(true);
            } 
        },[] 
    );

    const  togglePlayPause = ()=>{        
        const prevValue = isPlaying; //we take the initial state of isPlaying
    
        setIsPlaying(!prevValue); //and if it's playing, it'll take the opposite state, so it will play 
        if(!prevValue){
            audioPlayer.current.play();
           
          //console.log(isPlaying); //false
        }else{
            audioPlayer.current.pause();
           // console.log(isPlaying);   //true  
        
        } 
        
    }

return (

    <>   

    { isNull ? (
    <> 
        <p className="playPauseContainer">Preview <br/>not available</p>  
    </>
    ): (
      
    <> 
    <div className="playPauseContainer">  {/* //para PlayPauseBtn*/}
            <button 
                onClick={togglePlayPause}
                className="playPauseSongCard" 
                ref={buttonPressed}
                >    
                {isPlaying ? <BsPause/> : <BsPlayFill/> }   
            </button>
    </div>

    <div className="audioplayer container">
        <audio ref={audioPlayer} src={dataTrack.preview_url} preload="metadata" >  </audio>    
    </div>

    </>
    )}

    </>
  );
}
