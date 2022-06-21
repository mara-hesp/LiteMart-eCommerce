import { useState } from "react"

const ItemCount = ({ onAdd, stock, initial=1}) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) setCount(count + 1)
    }

    const decrement = () => {
        if(count > 1) setCount(count - 1)
    }

    return (
        <div className='counter'>
            <button className="btnCart" onClick={decrement}>-</button>
            <p>{count}</p>
            <button className="btnCart" onClick={increment}>+</button>
            <button className="btnAddToCart" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount