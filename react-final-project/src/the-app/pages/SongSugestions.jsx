import { Container,Row,Col,Card, Button } from "react-bootstrap";
import { songs } from "../data/songs";
import "./songsugestions-styles.css"

export function SongSugestions(
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
<div className="col-6">
<div className="sugcard">
  <img src={songImageUrl} className="card-img-top" alt="..."/>
  <div className="sugcard-body">
    <h5 className="sugcard-title">Card title</h5>
    <p className="subcard-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


</div>
        </>
)
 }