import "./audioplayer-styles.css"
import "./songlist-styles.css"
import { useState, useRef, useEffect } from "react"; //useRef to grab the audioplayer and setup the reference
import {BsPlay} from "react-icons/bs"
import {BsPause} from "react-icons/bs"


export function AudioPlayer({
    dataTrack, 
    trackList, 
   currentSong
}) {
 
    //state
  //uno de los cambios para PlayPauseBtn
    const[isPlaying, setIsPlaying] = useState(false);
  
    const[duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const [isNull, setIsNull] = useState(false);

    const [currentPlaying, setCurrentPlaying] = useState([]);

    //flag comment

    //references
     const audioPlayer = useRef(); //reference for our audio component/ to link the playPause btn to the audio
    const buttonPressed = useRef();

    useEffect(
        () =>{
  
            if(trackList.preview_url == null ){
           //     console.log(isNull)
                    setIsNull(true);
               //     setCurrentTime(0);
            } 
                setCurrentPlaying(trackList.preview_url)
            

            //  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);  //una vez que este cargado y exista el audio "file"
    },[] );


   

    const  togglePlayPause = ()=>{        
        const prevValue = isPlaying;

        setIsPlaying(!prevValue);
        if(!prevValue){
            audioPlayer.current.play();

            setCurrentPlaying(audioPlayer.current)

        }else{
            audioPlayer.current.pause();
        //   cancelAnimationFrame(animationRef.current);
           
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
                className="playPause" 
                ref={buttonPressed}
                >    
                {isPlaying ? <BsPause/> : <BsPlay/> }   
            </button>
    </div>

    <div className="audioplayer container">
        <audio ref={audioPlayer} src={trackList.preview_url} preload="metadata" >  </audio>
        
    </div>
    </>
    )}

    </>
  );
}
