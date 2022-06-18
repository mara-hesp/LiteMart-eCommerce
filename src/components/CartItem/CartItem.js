import { useContext, useState } from 'react'
import CartContext from '../../context/CartContext'

const CartItem = ({ name, count, price, id }) => {
    const [clickRemove, setClickRemove] = useState({})
    const { removeItems } = useContext(CartContext)

    const handleRemove = () => {
        setClickRemove(removeItems)
    }

    return (
        <div>
            <li className="cartItem">
                <p className='cartName'>{name}</p>
                <p className='cartPrice'>${price}</p>
                <p className='cartQuantity'>{count}</p>
                <div className='cartRemove'><button className='btnCartItem' onClick={handleRemove}>x</button></div>
            </li>
        </div>
    )
}

export default CartItem