import React from "react"
import { products } from "../../data/Products"
import ItemList from "../ItemList/ItemList"

/*  ACA IRIA LA LISTA DE PRODUCTOS QUE CREE EN ITEM*/
/*TRAJE LOS PRODUCTOS DEL ARCHIVO*/
export default function ItemListContainer() {

    const [ListProd, SetListProd] = React.useState([])

    const loadProds = new Promise((resolve, rejected) => {
    setTimeout (() => {
        resolve(products);
    },2000)

    })

    React.useEffect(() => {
        loadProds
        .then ((res)=> SetListProd(res))
        .catch((error) => console.log(error))
    },[])
  //  console.log(ListProd)
  return(
      <ItemList ListProd={ListProd}/>
  );
}