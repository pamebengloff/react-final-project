import { SearchBar } from "./SearchBar";
import { SongSugestions } from "./SongSugestions";
import "./homesearchbar-styles.css"

export function Home(){ //el contenedor (componente padre de Artist, Album y Song)
   
    return(
      <>
      <div className="container-fluid">
      <h1 className="home-greet"> Welcome to Benglofffyy!</h1>
      <h4 className="home-description">
     Type your favorite song and find similar songs!
      </h4>
      <SearchBar/>  
     
    {/*   <SongSugestions/>*/}
     

      </div>
        </>
    )
}