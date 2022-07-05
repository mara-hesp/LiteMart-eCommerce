import './Checkout.css'
import { Link } from "react-router-dom"
import Form from "../Form/Form"
import { useContext } from "react"
import CartContext from "../../context/CartContext"

const Checkout = (props) => {

    const { cart } = useContext(CartContext)

    return (
        <div className="checkout">
        <h1>{props.title}</h1>
        {cart.length > 0 ? <Form />
        : <h2 className='errorMsg'>¡Gracias por tu compra! <Link to="/">Regresar al inicio</Link></h2>}
        </div>
    )
}

export default Checkout