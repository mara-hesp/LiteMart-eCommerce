import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import NotificationContext from '../../notification/Notification'

const CartItem = ({ name, count, price, id }) => {
    const { removeItems } = useContext(CartContext)
    const setNotification = useContext(NotificationContext)

    const handleRemove = (id) => {
        removeItems(id)
        setNotification('error', `Se eliminó ${name} del carrito`)
    }

    const subTotal = (count, price) => {
        return price*count
    }

    return (
        <div>
            <li className="cartItem">
                <p className='cartName'>{name}</p>
                <p className='cartPrice'>${price}</p>
                <p className='cartQuantity'>{count}</p>
                <p className='cartTotal'>${subTotal(count, price)}</p>
                <div className='cartRemove'><button className='btnCartItem' onClick={() => handleRemove(id)}>x</button></div>
            </li>
        </div>
    )
}

export default CartItem