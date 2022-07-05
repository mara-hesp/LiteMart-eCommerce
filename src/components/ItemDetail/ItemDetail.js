import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useNotification } from '../../notification/Notification'

const ItemDetail = ({ id, name, price, img, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const setNotification = useNotification()

    const handleOnAdd = (count) => {
        setNotification('success', `Se agregaron ${count} ${name} al carrito`)
        addItem({ id, name, price, count})
        setQuantityAdded(count)
    }

    return (
        <div className="itemDetail">
            <img src={img} alt={name} />
            <div>
                <h2>{name}</h2>
                <h3>${price}.00</h3>
                { quantityAdded === 0
                ? <ItemCount onAdd={handleOnAdd} stock={stock}/>
                : <Link to='/cart'><button className="btnToCart">Terminar compra</button></Link>}
            </div>
        </div>
    )
}

export default ItemDetail