import { useEffect, useState } from "react";
import { AudioPlayer } from "./AudioPlayer";
import "./songlist-styles.css"


export function SongList({trackList, currentSongs}) {

  
return (
    <>
   
    <div className="container-fluid songListCont row">
      <div className=" song-row ">
          
          <div className="col-sm coll">
          <div className="col img-col">
              <img  className="song-img  mx-auto" alt="song" variant="bottom"  src={trackList.album.images[0].url} />
          </div>

          <div className="col titles-col">
              <h5 className="card-title "   data-bs-toggle="tooltip"  data-bs-title={trackList.name}>  {trackList.name} </h5>
              <p className="artist-title cardsub-title">  {trackList.artists[0].name} </p>
          </div>
          </div>

          <div className="col-sm audioplayerDIV ">
              <AudioPlayer trackList={trackList}  />        
          </div>    
      </div>


    </div>
    </>
    );
}