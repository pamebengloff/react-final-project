import { Container,Row,Col,Card, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { songs } from "../data/songs";
import { FooterPlayer } from "./FooterPlayer";
import "./card-styles.css"
import { useEffect, useState } from "react";

export function SongCard(
    {id,
    artistid,
    songtitle,
    albumtitle,
    artistname
}) 
{

    /*
    const getWindowWH = ()=> {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }   
    const [isWindowSize, setWindowSize] = useState(getWindowWH());
        useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowWH());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
     /* const hola= () => {
        if(isWindowSize.innerWidth < 577){
            console.log("hola");
            <img src={addIconUrl} alt="add"/>
        }
      }*/

      const [isDesktop, setDesktop] = useState(window.innerWidth > 305);

      const updateMedia = () => {
        setDesktop(window.innerWidth > 305);
      };
    
      useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      });


    const playIconUrl= "https://64.media.tumblr.com/ec1caca286f0c3bf33e702688c63b1e7/3b1a000b1886c631-6a/s75x75_c1/509ffe689953dee4308e9f32da91b701325e44f3.png"
    const songImageUrl = `/assets/albums/${albumtitle}.jpg`
//const songImageUrl = "https://64.media.tumblr.com/270099db904a757d322dec9c8fbb5661/tumblr_onmbmgvZfJ1w437o4o3_500.jpg"
    const addIconUrl= "https://64.media.tumblr.com/87aab768e833d73a15659eec4dbe44c0/5a4e57db2d1efedc-3f/s540x810/4268b196a38e192572a2193dd978936b115ba55e.png"

return (
    <>
   
         <li className="card container-fluid container-sm"> 
            <div className="songbutton-container col-lg-4 col-md-6 col-sm-6">
                  <img  className="song-img  mx-auto" alt="song" variant="bottom"  src={songImageUrl} />
                   <button className="button__play" >
                  <img src={playIconUrl} className="img--button__play" alt="Play" />
                 </button>
            </div>
            <div className="text-container  ">
                      <p className="card-title "   data-bs-toggle="tooltip"  data-bs-title={songtitle}>  {songtitle} </p>
                        <p className="cardalbum-title cardsub-title">  {albumtitle} </p>
                        <p className="cardsub-title">  {artistname} </p> {/*por mientras que arreglamos el link de abajo para que solo acepte artistas existentes en el url */}
                  {/*   <Card.Text>     <Link className="artist-link" to={`/artist/${artistname} `} > {artistname} </Link>   </Card.Text>  */}

            </div>
            <div className="addbutton-container col-lg-4 col-md-6 col-sm-6 ">
            {isDesktop ?
               ( <button className="btn addplaylist-button" >
                  <span>Add to playlist</span>  </button>)
                  :
                  ( <button className="plus-button">
                  <img className="plus-img" src={addIconUrl} alt="add to playlist" />
                  </button>)
           
            }
           </div>        
          
     
        </li>
       
    </>
    );
}

