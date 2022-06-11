import CartWidget from '../CartWidget/CartWidget';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './navBar.css'
export default function Navbar(props){

  const [isNavExpanded, setIsNavExpanded] = useState(false)
    
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
            <div className="cartWidget">
              <Link to ='/' className="cart"><CartWidget /></Link>
              <p className="cartCount">{props.cartCount}</p>
            </div>
        </div>
    )

}
