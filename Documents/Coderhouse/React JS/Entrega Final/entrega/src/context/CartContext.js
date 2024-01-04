import { createContext, useState } from "react"

export const CartContext = createContext ({
    cart: []
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    
    console.log(cart)

    const addItem = (item, quantity) => {

        if (!isInCart(item.id)) {
          
          setCart(prev => [...prev, {...item, quantity}]) // setCart: Función que actualiza el estado 'cart'.
                                                          // prev: Valor anterior del estado 'cart'.
                                                          // ...prev: Operador spread que crea una copia del estado 'cart'.
                                                          // {...item, quantity}: Crea un nuevo objeto con las propiedades de 'item' y agrega 'quantity'.
                                                          // [...prev, {...item, quantity}]: Crea un nuevo array agregando el nuevo objeto al final.
        } else {
          console.error('El producto ya fue agregado')
        }
      }
      
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    } 

    const total = () => {

    }

    const totalQuantity = () => {

    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}