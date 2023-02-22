import { useEffect, useState } from "react";
import { AudioPlayer } from "./AudioPlayer";
import "./songlist-styles.css"


export function SongList({trackList, currentSongs}) {

  
return (
    <>
<div className="container-fluid row">
     <div className="song-row"> 
        <div className="row ">
    
          <div className="col img-col">
              <img  className="song-img mx-auto" alt={trackList.name} variant="bottom"  src={trackList.album.images[0].url} />
          </div>
          <div className="col titles-col">
              <h4 className="card-title "   data-bs-toggle="tooltip"  data-bs-title={trackList.name}>  {trackList.name} </h4>
              <h5 className="subtitle">  {trackList.artists[0].name} </h5>
          </div>

   
        </div>
        
        <div className="col audioplayerDIV ">
              <AudioPlayer trackList={trackList}  />        
        </div>    
    </div> 


</div>
    </>
    );
}