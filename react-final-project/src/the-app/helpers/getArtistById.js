import {songs} from "../data/songs"

export function getArtistById(artistname){
//si el find no encuntra el id que mandamos como parametro en el url de artist/artistname
//regresa undefined, no existe ese id
  return(
    songs.find(song => song.artistname === artistname)
  )
 }
