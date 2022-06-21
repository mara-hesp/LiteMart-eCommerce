import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from "../../services/firebase"
import { getDoc, doc } from "firebase/firestore"
import Loading from "../Loading/Loading"

const ItemDetailContainer = ({ title }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect (() => {
        setLoading(true)

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(doc => {
            const productFormatted = { id: doc.id, ...doc.data() }
            setProduct(productFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(()=> {
            setLoading(false)
        })

    }, [productId])

    if(loading) {
        return <Loading />
    }

    return (
        <div>
            <h1>{title}</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer