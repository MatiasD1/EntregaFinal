const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://www.multipoint.com.ar/Image/0/750_750-a124.jpg',
        stock: 25,
        descrption: 'Celular buenardo'
    },
    {
        id: '2',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://www.multipoint.com.ar/Image/0/750_750-a124.jpg',
        stock: 25,
        descrption: 'Celular buenardo'
    },
    {
        id: '3',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://www.multipoint.com.ar/Image/0/750_750-a124.jpg',
        stock: 25,
        descrption: 'Celular buenardo'
    }
]

export const getProducts = ()=>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}