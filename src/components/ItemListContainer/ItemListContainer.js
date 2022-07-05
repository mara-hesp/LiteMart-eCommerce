import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { getProducts } from '../../services/firebase/firestore'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProducts(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(()=> {
            setLoading(false)
        })

    }, [categoryId])

    if(loading) {
        return <Loading />
    }

    return (
    <div>
        <h1>{props.title}</h1>
        {products.length > 0 ? <ItemList products={products}/>
        : <h2 className='errorMsg'>No hay productos</h2>}
    </div>
    )
}

export default ItemListContainer