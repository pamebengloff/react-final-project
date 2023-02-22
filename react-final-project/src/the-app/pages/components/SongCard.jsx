import "./songcard-styles.css"
import { AudioPlayerSongCard } from "./AudioPlayerSongCard";

export function SongCard({dataTrack}){
 
  
return(
<>
<div className="container-fluid">
<div className="yousearched">
<h5 className="title">You searched:</h5> 
</div>

<div className=" row songcard">

  <div className="img-container col-sm"> 
        <img className="songimg  mx-auto" src={dataTrack.album.images[0].url} alt="searched song" />

    <div className="songtext-container col-sm">
          <h4 className="subtitle titlesong"> {dataTrack.name} </h4>
          {/* <h5 className="subtitle"> {dataTrack.album.name} </h5> */}
          <h5 className="subtitle"> {dataTrack.artists[0].name} </h5>
          {/*  <p> ID: {dataTrack.id} + </p>*/}
    </div>  
  </div> 

  <div className="songaudio-container col-sm">
    <AudioPlayerSongCard dataTrack={dataTrack}/>
  </div>  
   
</div>

<div className="yousearched yousearched-bottom">
<h5 className="title">Recommendations:</h5> 
</div>
</div>
</>)}