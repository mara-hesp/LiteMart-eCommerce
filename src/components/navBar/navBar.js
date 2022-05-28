import { ReactComponent as CartWidget } from './CartWidget.svg'
import { useState } from "react";
export default function Navbar(){

  const [isNavExpanded, setIsNavExpanded] = useState(false)
    
    return (
        <div className="navBar">
            <div className="navCollapse">
                <button className="collapse" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>+</button>
                <a href="#" className="logoCollapse">LiteHome</a>
            </div>
            <ul className={
          isNavExpanded ? "nav expanded" : "nav"
        }>
                <li className="logohidden"><a href="#" className="logo">LiteHome</a></li>
                <li><a href="#">Colgantes</a></li>
                <li><a href="#">Lámparas de Techo</a></li>
                <li><a href="#">Lámparas de Mesa</a></li>
                <li><a href="#">Lámparas de Pared</a></li>
                <li><a href="#">Lámparas de Jardín</a></li>
            </ul>
            <div className="cartWidget">
            <a href="#" className="cart"><CartWidget /></a>
                <p className="cartCount">1</p>
            </div>
        </div>
    )
}


