import Item from "../Item/Item"
import React from "react"

export default function ItemList ({ListProd}) {
    const list = {
        display: "flex", 
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignItems: "center",
    }
    
    return (
        <>
        <h1 className="title"> NUESTROS CAFÉS </h1>
        <div style={list}>
            {ListProd.map((product) => <Item product={product} key={product.id}/>)}
        </div>
        </>
     )
}