import ItemCount from "../ItemCount/ItemCount"
import { Container, Card } from "react-bootstrap"

/* CARD CON EL PRODUCTO Y LOS BOTONES DEL ITEMCOUNT*/
export default function Item ({product}) {
    const img =
    {
        width: "50%",
        paddingLeft: "20px",
        paddingTop: "20px",
    }


    return(
            <Card border="light" style={{ width: '18rem', border: '3px solid #000000', margin:'30px'}}>
            <Card.Img className="text-center" variant="top" style={img}  src={product.img} alt={product.id}/>
            <Card.Body>
            <Card.Title className="text-center">{product.title}</Card.Title>
            <Card.Text className="text-center"> 
                <p>Descripcion: {product.description}</p>
                <p>Precio: {product.price}</p>
            </Card.Text>
            <ItemCount stock = {product.stock}/>
            </Card.Body>
            </Card>
    )
}