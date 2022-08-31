import { SearchBar } from "./SearchBar";
import "./home-styles.css"

export function Home(){ //el contenedor (componente padre de Artist, Album y Song)
   
    return(
      <>


<div className="container-fluid">
  <div className="row">
    <div className="col">
         <h1 className="home-greet"> Welcome to Benglofffyy!</h1>
    </div>
  </div>

  <div className="row">
    <div className="col">
    <h4 className="home-description">Type a song and find recommendations!   </h4>
    </div>
  </div>
</div>

      <SearchBar/>  

    
        </>
    )
}