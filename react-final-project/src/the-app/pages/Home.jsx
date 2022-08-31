import { SearchBar } from "./SearchBar";
import "./home-styles.css"

export function Home(){ //el contenedor (componente padre de Artist, Album y Song)
   
    return(
      <>


<div class="container-fluid">
  <div class="row">
    <div class="col">
         <h1 className="home-greet"> Welcome to Benglofffyy!</h1>
    </div>
  </div>

  <div class="row">
    <div class="col">
    <h4 className="home-description">Type a song and find recommendations!   </h4>
    </div>
  </div>
</div>

   
   
  


      <SearchBar/>  

    
        </>
    )
}