import { songs } from "../data/songs"
import { Album } from "./Album"
import { getArtistById } from "../helpers/getArtistById";
import {Navigate, useNavigate, useParams} from "react-router-dom"
import { Container,Row,Col,Card, Button } from "react-bootstrap";
import "./card-styles.css"

export function Artist(){

const navigate = useNavigate();
    //me regresa un arrego de artistas
   //const artistList = getArtistById(artistname);
 /*  const showArtist= 
    songs.map((song) => 
    {
      return(    
      <li key={song.id} 
          artist={song.artistname}
          albums={song.album} 
          songs={song.title}
        >{song.artistname}   
      </li> 
    )});*/

 // const uniqueArtists = [...new Set(songs.map(id => id.artistname))]
 // const artistList= uniqueArtists.map(artist => <p>{artist} </p>)
 // <div>{artistList[1]} </div> 

const {artistname} = useParams();
const artist = getArtistById(artistname); //esta roto este metodo, no me jala bien
console.log(artist);

/*
if(!artist){
  return <Navigate to="/song" />
}*/

return (
  <> 

  <div>
  <Button className="card-button" onClick={()=>{navigate(-1)} } >Go back</Button>
  <h1>{artistname} </h1> {/*uso del useParams para agarrar el param del url (artistname) */}

  </div>

    <Container>
      <Row>
        <Col>
            <Card className="card" style={{ width: '30rem' }}>
              
                <Card.Img variant="top"  src={"https://64.media.tumblr.com/270099db904a757d322dec9c8fbb5661/tumblr_onmbmgvZfJ1w437o4o3_500.jpg"} />
                
            </Card>
        </Col>
      </Row>
    </Container>


     
   
      </>
  ) 
}