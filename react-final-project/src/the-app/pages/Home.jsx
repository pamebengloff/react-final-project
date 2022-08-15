import {Link} from "react-router-dom"
import { Container,Row,Col,Card, Button } from "react-bootstrap";
import { FooterPlayer } from "./FooterPlayer";
import { SearchBar } from "./SearchBar";
import "./homesearchbar-styles.css"
//import albumHP from './album_hopesandfears.jpg'; // Tell Webpack this JS file uses this image 

export function Home(){ //el contenedor (componente padre de Artist, Album y Song)

   
    return(
      <>
      <div class="container-fluid">
      <h1 className="home-greet"> Welcome to Benglofffyy!</h1>
      <h4 className="home-description">

        Type your favorite song and find similar songs!
      </h4>
      <SearchBar/>
      
      </div>
        </>
    )
}