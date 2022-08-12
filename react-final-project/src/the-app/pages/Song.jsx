import {useNavigate} from "react-router-dom"
import { songs } from "../data/songs"
import {SongCard} from "./SongCard" 
import { Container,Row,Col,Card, Button } from "react-bootstrap";
import "./card-styles.css"

export function Song(){

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
<button className="btn search-button mt-1" onClick={()=>{navigate(-1)} } >Keep searching</button>
        <div className="row rows-cols-1 row-cols-md-3">
            
         {
           songs.map(
            song => (
              <SongCard key={song.id} 
              {...song} />
            )
          )
         }
          
        </div>


       </>
    )
}