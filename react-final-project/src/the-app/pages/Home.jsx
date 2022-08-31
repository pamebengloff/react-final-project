import { SearchBar } from "./SearchBar";
import "./home-styles.css"

export function Home(){ //el contenedor (componente padre de Artist, Album y Song)
   
    return(
      <>


<div className="container">
  <div className="row home-row">
    <div className="col">
         <h1 className="home-greet"> Welcome to Benglofffyy!</h1>
    </div>
  </div>

  <div className="row home-row">
    <div className="col">
    <h4 className="home-description">Type an artist or a song and find song recommendations!   </h4>
    </div>
  </div>
</div>

      <SearchBar/>  

    
        </>
    )
}