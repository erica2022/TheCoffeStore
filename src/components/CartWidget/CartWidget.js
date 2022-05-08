/* AGREGA LA IMAGEN DE LA CANASTA AL MENU */
export default function CartWidget ({count}) {
    return (
        <div className="text">
            <img src="images/canasta.png" alt="Carrito de compras"/>
            {count}
        </div> 
    ) 
}