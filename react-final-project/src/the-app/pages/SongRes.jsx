import {useNavigate} from "react-router-dom"
import { songs } from "../data/songs"
import {SongCard} from "./SongCard" 
import "./card-styles.css"

export function SongRes(){ //componente que "saca del json songs.js" sus items y se los pasa a SongCard.jsx para acomodarlos allá

  const navigate = useNavigate();

//aqui vamos a sacar todos los titulos de las canciones, con un map y un p i guess
  //  const songList= songs.map(song => <li key={song.id}>{song.song} </li>)  
/*
const songList = songs.map(
  songs => (<p key={songs.artistid}>{songs.songtitle} </p> )
)*/



//es que mmm como poner cada item en un card diferente
    return(
        <>
  <button className="btn search-button mt-1" onClick={()=>{navigate("/")} } >Keep searching</button>
    {/*abajo del boton se va a llenar de rows y cols de las songcards */}  
   
    <ul className="songcard-container row container-fluid">
         {
           songs.map(
            song => (
              <SongCard key={song.id} 
              {...song} />
            )
          )
         }
    </ul>

       </>
    )
}