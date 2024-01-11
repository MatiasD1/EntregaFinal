import './CartItem.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({id, name, price, quantity}) => {
    
    const subtotal = price * quantity;
    const { removeItem } = useContext(CartContext); 

    /*Forma con una funcion adicional
    const handleRemoveItem = () => {
        removeItem(id);
    }
*/
    return(
        <div className="cart-item">
            <p>{name} Cantidad:{quantity} ${price} Subtotal: ${subtotal}</p>
            {/*<button onClick={handleRemoveItem}>X</button>*/}
            <button onClick={() => removeItem(id)}>X</button>
        </div>
    )
}

export default CartItem