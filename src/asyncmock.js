const products = [
    {
        id: "1",
        category: "techo",
        name: "Lámpara De Techo Níquel Satinado",
        img: "/images/09978-4.jpg",
        price: 1389,
        stock: 75
    },
    {
        id: "2",
        category: "colgantes",
        name: "Lámpara Colgante Bronce Cepillado",
        img: "/images/04947-9.jpg",
        price: 1889,
        stock: 32
    },
    {
        id: "3",
        category: "pared",
        name: "Aplique de Pared Moderno Bronce",
        img: "/images/22125-0.jpg",
        price: 669,
        stock: 150
    }
]

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

