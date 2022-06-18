import { useContext } from "react"
import CartContext from "../../context/CartContext"

const CartWidget = () => {

    const { getCartQuantity } = useContext(CartContext)

    const totalQuantity = getCartQuantity()

    return (
        <div className="cartWidget">
            <img src='/images/cart.svg' />
            <p className="cartCount">{ totalQuantity }</p>
        </div>
    )
}

export default CartWidget