import { useState, createContext } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log(cart)
  
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

    const getTotals = (state, action) => {
        let { total, quantity } = state.cart.reduce(
            (cartTotal, cart) => {
                const { price, cartQuantity } = cart;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity
            },
            {
                total: 0,
                quantity: 0,
            }
        );

        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItems, isInCart, getCartQuantity, clearCart, getTotals }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext