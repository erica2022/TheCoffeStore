import React from "react"

const Context = React.createContext();
const {Provider} = Context;

const CartProvider = ({children}) => {
    const [coffeeCart, setCoffeeCart] = React.useState([])
    const totalCart= 0

    console.log(coffeeCart)

// AGREGA UN PRODUCTO AL CARRITO Y AUMENTA SU CANTIDAD SI ESTA
const addItem = (coffee, count) => {
    if(isInCart(coffee.id)) {
        const newCart = coffeeCart.map(item => {if(item.id === coffee.id) {item.quantity++} })
        setCoffeeCart(newCart)
    }
    else {
        setCoffeeCart([...coffeeCart, {...coffee, quantity: +count}])
    }
    
}

//ELIMINO UN PRODUCTO DEL CARRITO
const removeItem = (id) => {
    if(isInCart(id)) {      
        const newCart = coffeeCart.filter(item => item.id!==id) 
        setCoffeeCart(newCart)
    }
}

//VACIO EL CARRITO
const clear = () => {
    setCoffeeCart([])
} 

//BUSCA SI EL PRODUCTO ESTA EN EL CARRITO
const isInCart = (id) =>{
    return coffeeCart.some(coffee => coffee.id === id)
}
//const total = 0
//const totalCart = coffeeCart.reduce(item,item2) => item+item2,total)
       
    return(
        <Provider value = {{ addItem, removeItem, clear, isInCart, coffeeCart, }}>{children}</Provider>
    )
}
export {Context, CartProvider}