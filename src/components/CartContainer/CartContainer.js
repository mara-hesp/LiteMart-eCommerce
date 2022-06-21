import './CartContainer.css'
import CartList from '../CartList/CartList'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartContainer = () => {

    const { cart } = useContext(CartContext)

    return (
    <div>
        <h1>CART</h1>
        {cart.length > 0 ? <CartList />
        : <h2 className='errorMsg'>¡Tu carrito está vacío! <Link to='/'> Regresa a comprar</Link></h2>}
    </div>
    )
}

export default CartContainer