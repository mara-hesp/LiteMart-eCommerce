import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { useNotification } from "../../notification/Notification"
import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import Loading from "../Loading/Loading"

const Form = () => {

    const [ values, setValues] = useState({ name: '', phone: '', email: ''})
    const [ loading, setLoading ] = useState(false)
    const { cart, getTotal, clearCart } = useContext(CartContext)
    const setNotification = useNotification()

    const total = getTotal()

    const handleCreateOrder = (evt) => {
        evt.preventDefault();

        setLoading(true)

        const objOrder = {
            buyer: {...values},
            items: cart,
            total: total
        }

        const batch = writeBatch(db)

        const ids = cart.map(prod => prod.id)

        const outOfStock = []

        const collectionRef = collection(db, 'productos')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
        .then(resp => {
            resp.docs.forEach(doc => {
                const dataDoc = doc.data()
                const prod = cart.find(prod => prod.id === doc.id)
                const prodQuantity = prod.count

                if(dataDoc.stock >= prodQuantity) {
                    batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
        }).then(() => {
            if(outOfStock.length === 0) {
                const collectionRef = collection(db, 'orders')
                return addDoc(collectionRef, objOrder)
            } else {
                return Promise.reject({ type: 'out_of_stock', products: outOfStock })
            }
        }).then(({ id }) => {
            batch.commit()
            clearCart()
            setNotification('success', `Su orden se generó correctamente. El id de su orden es: ${id}`)
        }).catch(error => {
            if(error.type === 'out_of_stock') {
                setNotification('error', `Hay productos que no cuenta con suficiente stock`)
            } else {
                console.log(error)
            }
        }).finally(() => {
            setLoading(false)
        })

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

    if(loading) {
        return <Loading />
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