import { useEffect, useState } from "react";
import { AudioPlayer } from "./AudioPlayer";
import "./songlist-styles.css"


export function SongList({trackList, currentSongs}) 
{

     /*PARA EL SCREEN SIZE*/
      const [isDesktop, setDesktop] = useState(window.innerWidth > 305);
      const updateMedia = () => {
        setDesktop(window.innerWidth > 305);
      };
      useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      });


    const playIconUrl= "https://64.media.tumblr.com/ec1caca286f0c3bf33e702688c63b1e7/3b1a000b1886c631-6a/s75x75_c1/509ffe689953dee4308e9f32da91b701325e44f3.png"
    const addIconUrl= "https://64.media.tumblr.com/87aab768e833d73a15659eec4dbe44c0/5a4e57db2d1efedc-3f/s540x810/4268b196a38e192572a2193dd978936b115ba55e.png"

//flag comment

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
          <p className="cardsub-title">  {trackList.artists[0].name} </p> {/*por mientras que arreglamos el link de abajo para que solo acepte artistas existentes en el url */}           
        </div>

    <div className="col-sm audioplayerDIV ">
        <AudioPlayer trackList={trackList}  currentSong={trackList.preview_url}  />        
    </div>
    
    
  </div>
</div>


    </>
    );
}

