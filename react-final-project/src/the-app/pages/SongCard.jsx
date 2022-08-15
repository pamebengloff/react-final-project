import { Container,Row,Col,Card, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { songs } from "../data/songs";
import "./card-styles.css"
import { FooterPlayer } from "./FooterPlayer";

export function SongCard(
    {id,
    artistid,
    songtitle,
    albumtitle,
    artistname
}) 
{

    const songImageUrl = `/assets/albums/${albumtitle}.jpg`
//const songImageUrl = "https://64.media.tumblr.com/270099db904a757d322dec9c8fbb5661/tumblr_onmbmgvZfJ1w437o4o3_500.jpg"
    return (
        <Container className="song-container">
        <Row>
          <Col>
              <Card className="card" style={{ width: '18rem' }}>
                  <Card.Img variant="top" className="card-img"  src={songImageUrl} />
                 <button className="card--button__play"
                onClick={
                  songs.map(
                     song => (
                       <FooterPlayer key={song.id} 
                       {...song} />
                     )
                   )
                  }
                 
                 >
                   <img src="https://64.media.tumblr.com/ec1caca286f0c3bf33e702688c63b1e7/3b1a000b1886c631-6a/s75x75_c1/509ffe689953dee4308e9f32da91b701325e44f3.png" alt="Play" />
                 </button>
                 
                  <Card.Body>
                      <Card.Title>  {songtitle} </Card.Title>
                        <Card.Text>  {albumtitle} </Card.Text>
                        <Card.Text>  {artistname} </Card.Text> {/*por mientras que arreglamos el link de abajo para que solo acepte artistas existentes en el url */}
                        <Card.Text> 
                {/*          <Link className="artist-link" to={`/artist/${artistname} `} > {artistname} </Link>*/}
                         </Card.Text>
                       

                      <Button className="card-button" >Add to playlist</Button>
                  </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
    );
}

