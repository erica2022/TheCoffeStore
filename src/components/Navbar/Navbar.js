import logo from "../../assets/Img/logo.png"

export default function Navbar(){
 
const container = {
    width: "100%",
    maxWidth: "1500px",
    backgroundColor: "#e9e9e9",
    borderRadius:"20px",
    display:"flex",
    justifyContent : "space-between",
    alignItems: "center",
    padding: "20px 20px",
}
        
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
    fontSize: "22px",
    padding: "20px 20px",
    fontWeight: "bold"
}
    return(
        <header style = {container}>
            <div > 
                <img src={logo} id="logo" alt="logo de la empresa" className="logo"/>
            </div>
            <ul style={menu}>
                <li style={link}>  Inicio </li>
                <li style={link}> Comprá Online </li>
                <li style={link}> Nosotros </li>
            </ul>
        </header>
    );
}

