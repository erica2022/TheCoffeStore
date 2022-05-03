import CartWidget from "../CartWidget/CartWidget"

export default function Navbar(){
        
const menu = {
    display : "flex",
    justifyContent : "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
}  

const link = {
    color:"#603813",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "24px",
    padding: "20px 20px",
    fontWeight: "bold"
}
    return(
    <>
        <header className="container">
            <div > 
                <img src="images/logo.png" id="logo" alt="logo de la empresa" className="logo"/>
            </div>
            <ul style={menu}>
                <li style={link}> Inicio </li>
                <li style={link}> Comprá Online </li>
                <li style={link}> Nosotros </li>
                <CartWidget count={8}/>
            </ul>
        </header>
        <main>
            
        </main>  
    </>
    );
}

