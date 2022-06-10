import './ItemDetail.css'

const ItemDetail = ({ id, name, price, img }) => {
    return (
        <div className="itemDetail">
            <img src={img} alt={name} />
            <div>
                <p>{id}</p>
                <h2>{name}</h2>
                <h3>${price}.00</h3>
            </div>
        </div>
    )
}

export default ItemDetail