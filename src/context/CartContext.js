import { useState, createContext } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
  
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart([...cart, productToAdd])
      }
    }

    const removeItems = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    const getCartQuantity = () => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.count
        })

        return totalQuantity
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.count * prod.price
        })
        
        return total
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItems, isInCart, getCartQuantity, clearCart, getTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext