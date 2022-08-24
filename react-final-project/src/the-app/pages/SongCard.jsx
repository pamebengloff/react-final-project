import { Container,Row,Col,Card, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { songs } from "../data/songs";
import { FooterPlayer } from "./FooterPlayer";
import "./card-styles.css"

export function SongCard(
    {id,
    artistid,
    songtitle,
    albumtitle,
    artistname
}) 
{
    const playIconUrl= "https://64.media.tumblr.com/ec1caca286f0c3bf33e702688c63b1e7/3b1a000b1886c631-6a/s75x75_c1/509ffe689953dee4308e9f32da91b701325e44f3.png"
    const songImageUrl = `/assets/albums/${albumtitle}.jpg`
//const songImageUrl = "https://64.media.tumblr.com/270099db904a757d322dec9c8fbb5661/tumblr_onmbmgvZfJ1w437o4o3_500.jpg"
    return (
    <>
    <ul className="songcard-container">
         <li className="card  container-fluid"> 
            <div className="songbutton-container">
                  <img  className="song-img" alt="song" variant="bottom"  src={songImageUrl} />
                   <button className="button__play" >
                  <img src={playIconUrl} className="img--button__play" alt="Play" />
                 </button>
            </div>
            <div className="text-container col-sm-6">
                      <p className="card-title ">  {songtitle} </p>
                        <p className="cardalbum-title cardsub-title">  {albumtitle} </p>
                        <p className="cardsub-title">  {artistname} </p> {/*por mientras que arreglamos el link de abajo para que solo acepte artistas existentes en el url */}
                  {/*   <Card.Text>     <Link className="artist-link" to={`/artist/${artistname} `} > {artistname} </Link>   </Card.Text>  */}
            </div>
            <div className="addbutton-container col-lg-4  col-md-6  col-sm-12">
                      <button className="addplaylist-button" >
                          <span>Add to playlist</span>
                      </button>
             </div>
                  
              
     
        </li>
        </ul>
    </>
    );
}

