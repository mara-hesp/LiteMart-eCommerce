import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    useEffect (() => {
        getProductsById('1').then(response => {
            setProduct(response)
        })
    }, [])
    console.log(product)

    return (
        <div>
            <h1>Detalles del producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer