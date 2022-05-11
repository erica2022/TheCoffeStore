import Item from "../Item/Item"
import React from "react"

export default function ItemList (ListProd) {
    return (
        <div>

           {ListProd.map((product) => <Item product={product} key={product.id}/>)} 
        </div>       
    )
}