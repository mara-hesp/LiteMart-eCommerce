import { Link } from "react-router-dom"

const Item = ({ name, img, price, id }) => {

    return (
        <div>
            <li className="item">
                <img src={img} alt={name}/>
                <div className="itemInfo">
                <p>{name}</p>
                <h3>${price}</h3>
                </div>
            </li>
            <Link to={`/detail/${id}`}className="itemBtn"><button>Ver detalles</button></Link>
        </div>
    )
}

export default Item