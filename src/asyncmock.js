const products = [
    {
        id: "1",
        category: "Lámparas de Techo",
        name: "Lámpara De Techo Níquel Satinado",
        img: "images/09978-4.jpg",
        price: 1389,
        stock: 75
    },
    {
        id: "2",
        category: "Colgantes",
        name: "Lámpara Colgante Bronce Cepillado",
        img: "images/04947-9.jpg",
        price: 1889,
        stock: 32
    },
    {
        id: "3",
        category: "Lámparas de Pared",
        name: "Aplique de Pared Moderno Bronce",
        img: "images/22125-0.jpg",
        price: 669,
        stock: 150
    }
]

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsById = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1500)
    })
}

