import {Card} from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { Container } from "react-bootstrap"

/* CARD CON EL PRODUCTO Y LOS BOTONES DEL ITEMCOUNT*/
export default function ItemList () {
    const producto=
    {
        width: "50%",
        paddingLeft: "20px",
        paddingTop: "20px",
    }

    return(
        <Container>
            <Card border="light" style={{ width: '18rem' }}>
            <Card.Img className="text-center" variant="top" style={producto}  src="images/colombia.png" />
            <Card.Body>
            <Card.Title className="text-center">Cafe de Colombia</Card.Title>
            <Card.Text className="text-center"> Jazmín, Rosa. Café Lavado, se bebe mejor sin agregarle Leche.</Card.Text>
            <ItemCount stock={5}/>
            </Card.Body>
            </Card>
        </Container>
    )
}