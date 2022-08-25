import {useNavigate} from "react-router-dom"
import { songs } from "../data/songs"
import {SongList} from "./SongList"
import { SongCard } from "./SongCard" 
import "./songlist-styles.css"

export function SongRes(){ //componente que "saca del json songs.js" sus items y se los pasa a SongCard.jsx para acomodarlos allá

 
//aqui vamos a sacar todos los titulos de las canciones, con un map y un p i guess
  //  const songList= songs.map(song => <li key={song.id}>{song.song} </li>)  
/*
const songList = songs.map(
  songs => (<p key={songs.artistid}>{songs.songtitle} </p> )
)*/



//es que mmm como poner cada item en un card diferente
    return(
        <>
    <SongCard/>

    <ul className="songcard-container row container-fluid">
         {
           songs.map(
            song => (
              <SongList key={song.id} 
              {...song} />
            )
          )
         }
    </ul>

       </>
    )
}