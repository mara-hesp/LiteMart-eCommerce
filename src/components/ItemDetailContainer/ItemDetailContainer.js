import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductsById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({ title }) => {
    const [product, setProduct] = useState()
    const { productId } = useParams()

    useEffect (() => {
        getProductsById(productId).then(response => {
            setProduct(response)
        })
    }, [productId])

    return (
        <div>
            <h1>{title}</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer