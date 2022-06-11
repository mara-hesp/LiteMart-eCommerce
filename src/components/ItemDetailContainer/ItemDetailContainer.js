import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductsById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState()
    const { productId } = useParams()

    useEffect (() => {
        getProductsById(productId).then(response => {
            setProduct(response)
        })
    }, [])

    return (
        <div>
            <h1>{props.title}</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer