import {Card} from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { Container } from "react-bootstrap"
import { Button } from "bootstrap"

/* CARD CON EL PRODUCTO Y LOS BOTONES DEL ITEMCOUNT*/
export default function Item ({product}) {
    const producto=
    {
        width: "50%",
        paddingLeft: "20px",
        paddingTop: "20px",
    }
    return(
        <Container>
            <Card border="light" style={{ width: '18rem', border: "1px solid #ccccc"}}>
            <Card.Img className="text-center" variant="top" style={product}  src={producto.img} />
            <Card.Body>
            <Card.Title className="text-center">{producto.title}</Card.Title>
            <Card.Text className="text-center"> 
                <p>Descripcion: {product.description}</p>
                <p>Precio: {product.price}</p>
            </Card.Text>
            <Button variant="primary"> + Info </Button>
            <ItemCount stock = {product.stock}/>
            </Card.Body>
            </Card>
        </Container>
    )
}