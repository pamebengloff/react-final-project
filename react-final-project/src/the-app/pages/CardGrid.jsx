import { Container,Row,Col,Card, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import { Song } from "./Song";
import "./card-styles.css"

export function CardGrid(){
return(
    <Container className="cards-container">
      <Row className="card-row"> {/*para las canciones */}
        <Col className="card-col"> <Song/> </Col>
        <Col className="card-col"> <Song/> </Col>
        <Col> <Song/> </Col>
        <Col> <Song/> </Col>
        <Col> <Song/> </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>


    )
}