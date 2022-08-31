import {useState, useRef} from 'react';
import "./songlist-styles.css"

export function playPauseBtn(props) {

    const[isPlaying, setIsPlaying] = useState(true);

    const audioPlayer = useRef(); //reference for our audio component/ to link the playPause btn to the audio

    const  togglePlayPause = ()=>{        
        const prevValue = isPlaying;

        setIsPlaying(!prevValue);
        if(!prevValue){
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying); //to match every frame 
        }else{
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }


    return (
        <div className="circle-wrap">
        <button 
            onClick={togglePlayPause}
            className="playPause" >    
            {isPlaying ? <BsPause/> : <BsPlay/> }   
        </button>
    </div>
    );
     
}
