import {Button} from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import { Song } from "./Song";
import "./searchbar-styles.css"

export function SearchBar(){

    const navigate = useNavigate();

    return(
        <>
        <div className="col-6">
          
           
            <form >
                <input type="text"
                placeholder="Search a song"
                className="form-control"
                name="searchText" //para poder tomar el valor del input y trabajar con el
                autoComplete="off"
                />
            </form>
          
            <button className="btn search-button mt-1" 
            onClick={()=>{navigate("/song")} }
            
            >Start</button>
        </div>

     {/*   <div> aqui vamos a mostrar los resultados de la busqueda 

        <h4>Results of SONG YOU SEARCHED </h4>

        <div className="alert alert-primary">
            Find songs
        </div>

        <div className="alert alert-danger">
            There's no results for SONG YOU SEARCHED
        </div>
  </div>
*/}
      {/* <Song />*/} 
      

        </>
    )
}