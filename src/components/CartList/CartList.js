import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const CartList = () => {

    const { cart } = useContext(CartContext)

    return (
        <ul className="cartList">
            <li className='cartItemHead'>
                    <p className='cartName'>Producto</p>
                    <p className='cartPrice'>Precio</p>
                    <p className='cartQuantity'>Cantidad</p>
                    <div className='cartRemove'></div>
            </li>
        {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
        </ul>
    )
}

export default CartList