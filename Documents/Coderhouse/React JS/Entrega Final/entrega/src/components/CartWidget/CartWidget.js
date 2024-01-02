import cart from '../../assets/cart.png';
import "./CartWidget.css";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  
    const { totalQuantity } = useContext(CartContext)

    return (
        
        <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='CartImg' src={cart} alt='cart-widget'/>
            { totalQuantity }
        </Link>
        /*<div className="cart-widget-container">
        <img src={cart} alt="cart-widget" />
        <span className="quantity">0</span>
        </div>*/
  );
}

export default CartWidget;
