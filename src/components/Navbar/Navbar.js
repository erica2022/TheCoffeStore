import CartWidget from "../CartWidget/CartWidget"
import {Navbar, Container, Nav} from "react-bootstrap"

export default function NavBar(){
        
const menu = {
    backgroundColor:"#efefef",
    borderRadius: "25px"
}  

const link = {
    color:"#603813",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "24px",
    padding: "20px 20px",
    fontWeight: "bold"
}
/* CREO EL HEADER DE LA PAGINA Y AGREGO EL CARRITO CREADO EN CARTWIDGET*/
    return(
        <header style={menu}>
            <Navbar expand="lg" >
            <Container>
                <div > 
                    <img src="images/logo.png" id="logo" alt="logo de la empresa" className="logo"/>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
                <Nav className="me-auto">
                <Nav.Link href="#home" style={link}>Inicio</Nav.Link>
                <Nav.Link href="#link" style={link}>Comprá Online</Nav.Link>
                <Nav.Link href="#link" style={link}>Nosotros</Nav.Link>           
                <CartWidget count={8}/>
            </Nav>
            </Container>
            </Navbar>
        </header>
    );
}

