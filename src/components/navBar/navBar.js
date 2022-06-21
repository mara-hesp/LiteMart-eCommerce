import CartWidget from '../CartWidget/CartWidget';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './navBar.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

export default function Navbar(){
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const { cart } = useContext(CartContext)

    
    return (
        <div className="navBar">
            <div className="navCollapse">
                <button className="collapse" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>+</button>
                <Link to ='/' className="logoCollapse">LiteHome</Link>
            </div>
            <ul className={isNavExpanded ? "nav expanded" : "nav"}>
                <li className="logohidden"><Link to ='/' className="logo">LiteHome</Link></li>
                <li><Link to='/category/colgantes'>Colgantes</Link></li>
                <li><Link to='/category/techo'>Lámparas de Techo</Link></li>
                <li><Link to='/category/pared'>Lámparas de Pared</Link></li>
            </ul>
              <Link to ='/cart' className={cart.length > 0 ? 'cart' : 'cartEmpty'}><CartWidget /></Link>
        </div>
    )

}
