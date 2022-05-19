import { Container, Card, Row, Col } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"

export default function ItemDetail ({coffee}){
    const img =
    {
        width: "50%",
        padding: "10px 10px",
        margin: "0 auto"
    }

    const titleCard =
    {
        color: "#666666",
        textAlign: "center",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "30px",
        padding: "20px 20px"
    }

    return(
       <Container>
       <Row>         
            <Col>
            <Card border="light" style={{ width: '300', height: '300px', border: '0px solid #000000', margin:'30px'}}>
            <Card.Img className="text-center" style={img} variant="top" src={coffee.img} alt={coffee.id}/>
            </Card>                            
            </Col>  
            <Col>
                <Card border="light" style={{ width: '500', height: '400px', border: '0px solid #000000', margin:'30px'}}>                                
                <Card.Body>
                <Card.Title style={titleCard}>{coffee.title}</Card.Title>
                    <Card.Text> 
                        <p className="textCard"><b>{coffee.description}</b></p>
                        <p className="textCard"><b>Stock:</b> {coffee.stock}</p>
                        <p className="textCard"><b>Precio:</b> {coffee.price}</p>
                    </Card.Text>
                    <ItemCount stock = {coffee.stock}/>
                </Card.Body>
                </Card>                  
            </Col>   
        </Row> 
 
        </Container>
    )
}