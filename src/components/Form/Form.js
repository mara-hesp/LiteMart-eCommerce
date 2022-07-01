import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/firebase/index'

const Form = () => {

    const [ values, setValues] = useState('')

    const { cart, getTotal, clearCart } = useContext(CartContext)

    const total = getTotal()

    const handleCreateOrder = (evt) => {
        evt.preventDefault();

        const objOrder = {
            buyer: {...values},
            items: cart,
            total: total
        }

        const collectionRef = collection(db, 'orders')

        addDoc(collectionRef, objOrder).then(clearCart)
    }

    const handleChange = (evt) => {
        const { target } = evt
        const { name, value } = target

        const newValues = {
            ...values,
            [name]: value
        }

        setValues(newValues)

    }

    return (
        <form onSubmit={handleCreateOrder}>
        <p>Completa los siguientes datos:</p>
            <label>Nombre:
                <br /><input id="name" type="text" name="name" value={values.name} onChange={handleChange} />
            </label>
            <br />
            <label>Teléfono:
                <br /><input id="phone" type="text" name="phone" value={values.phone} onChange={handleChange} />
            </label>
            <br />
            <label>E-mail:
                <br /><input id="email" type="email" name="email" value={values.email} onChange={handleChange} />
            </label>
            <br />
            <input type="submit" value="Terminar Compra" className="submitBtn"/>
    </form>
    )
    
}

export default Form