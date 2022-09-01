import {useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import { AudioPlayer } from "./AudioPlayer";

import "./songcard-styles.css"

export function SongCard({dataTrack, onNavigateHome}){
 

//    console.log("hola desde song card")   
    return(
<>

  <div className="songcard-container container-fluid col-sm ">
    <div className="songimg-container">
  
        <img className="song-result-img img-fluid " src={dataTrack.album.images[0].url} alt="searched song" />
    </div>
    
    <div className="songtext-container col-sm">
        <h1 className="title"> {dataTrack.name} </h1>
        <h4 className="title"> {dataTrack.album.name} </h4>
        <h4 className="title"> {dataTrack.artists[0].name} </h4>
       
      {/*  <p> ID: {dataTrack.id} + </p>*/}
    </div>

   
  </div>
</>
    )
}