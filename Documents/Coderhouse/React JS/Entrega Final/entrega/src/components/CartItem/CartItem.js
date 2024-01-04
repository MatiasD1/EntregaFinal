import './CartItem.css'

const CartItem = ({name, price, quantity}) => {
    
    const subtotal = price * quantity;

    return(
        <div className="cart-item">
            <p>{name} Cantidad:{quantity} ${price} Subtotal: ${subtotal}</p>
            <button>X</button>
        </div>
    )
}

export default CartItem