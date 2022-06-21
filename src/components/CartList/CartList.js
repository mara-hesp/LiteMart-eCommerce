import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const CartList = () => {

    const { cart, clearCart } = useContext(CartContext)

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
                    <p className='cartTotal'>${cart.reduce((total, item)=>total+(item.price*item.count),0)}</p>
                    <div className='cartRemove'></div>
            </li>
        </ul>
        <button className="btnClear" onClick={() => clearCart()}>Limpiar carrito</button>
        <button className='btnPayment'>Proceder al Pago</button>
        </div>
    )
}

export default CartList