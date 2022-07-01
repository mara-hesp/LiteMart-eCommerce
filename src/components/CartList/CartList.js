import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const CartList = () => {

    const { cart, clearCart, getTotal } = useContext(CartContext)

    const total = getTotal()

    return (
        <div className='cartContainer'>
        <ul className="cartList">
            <li className='cartItemHead'>
                    <p className='cartName'>Producto</p>
                    <p className='cartPrice'>Precio</p>
                    <p className='cartQuantity'>Cantidad</p>
                    <p className='cartTotal'>Subtotal</p>
                    <div className='cartRemove'></div>
            </li>
        {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            <li className='cartItemHead'>
                    <p className='cartName'></p>
                    <p className='cartPrice'></p>
                    <p className='cartQuantity'>Total</p>
                    <p className='cartTotal'>${total}</p>
                    <div className='cartRemove'></div>
            </li>
        </ul>
        <Link to='/checkout'><button className='btnPayment'>Proceder al Pago</button></Link>
        <button className="btnClear" onClick={() => clearCart()}>Limpiar carrito</button>
        </div>
    )
}

export default CartList