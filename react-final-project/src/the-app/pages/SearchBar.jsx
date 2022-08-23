import {Button} from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import { SongRes } from "./SongRes";
import "./homesearchbar-styles.css"

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
                <button className="btn search-button mt-2"
                    onClick={()=>{navigate("/songresults")} }
                    >Start
                </button>
            </form>
          
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