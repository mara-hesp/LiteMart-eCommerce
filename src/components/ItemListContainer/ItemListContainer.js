import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        if(!categoryId) {
            getProducts().then(response => {
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    } else {
            {
                getProductsByCategory(categoryId).then(response => {
                setProducts(response)
            })}
        }
    }, [categoryId])

    if(loading) {
        return <Loading />
    }

    return (
    <div>
        <h1>{props.title}</h1>
        {products.length > 0 ? <ItemList products={products}/>
        : <h2>No hay productos</h2>}
    </div>
    )
}

export default ItemListContainer