import { useEffect, useState } from "react";
import { AudioPlayer } from "./AudioPlayer";
import "./songlist-styles.css"


export function SongList({trackList, currentSongs}) {

 
     /*PARA EL SCREEN SIZE*/
      const [isDesktop, setDesktop] = useState(window.innerWidth > 305);
      const updateMedia = () => {
        setDesktop(window.innerWidth > 305);
      };
      useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      });

  
return (
    <>
    <div className="container  ">
      <div className="row song-row ">
          <div className="col-sm img-col">
              <img  className="song-img  mx-auto" alt="song" variant="bottom"  src={trackList.album.images[0].url} />
          </div>

          <div className="col-sm titles-col">
              <p className="card-title "   data-bs-toggle="tooltip"  data-bs-title={trackList.name}>  {trackList.name} </p>
          </div>

          <div className="col-sm titles-col">
              <p className="cardalbum-title cardsub-title">  {trackList.album.name} </p>
              <p className="artist-title cardsub-title">  {trackList.artists[0].name} </p>
          </div>

          <div className="col-sm audioplayerDIV ">
              <AudioPlayer trackList={trackList}  />        
          </div>    
      </div>
    </div>
    </>
    );
}