const Item = ({ name, img, price }) => {
    return (
        <li className="item">
            <img src={img} alt={name}/>
            <p>{name}</p>
            <h3>${price}</h3>
            <button>Ver detalles</button>
        </li>
    )
}

export default Item