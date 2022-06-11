import { Link } from "react-router-dom"

const Item = ({ name, img, price, id }) => {
    return (
        <li className="item">
            <img src={img} alt={name}/>
            <p>{name}</p>
            <h3>${price}</h3>
            <Link to={`/detail/${id}`}><button>Ver detalles</button></Link>
        </li>
    )
}

export default Item