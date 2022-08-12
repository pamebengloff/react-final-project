import { songs } from "../data/songs";

export function Album(){

    const albumsByArtist = songs.filter(
        (albums) =>(
          albums.artistid.includes("1") )
    );
    
    
    const albumsList = albumsByArtist.map(
      album => <li key={album.artistid}>{album.album} </li>
    )

    return(
        <div>
            {albumsList}
        </div>
    )
}
