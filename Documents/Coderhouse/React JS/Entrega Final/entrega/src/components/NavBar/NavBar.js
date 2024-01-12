import './NavBar.css'; 
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/batman`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Batman</NavLink>
                <NavLink to={`/category/starwars`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Star Wars</NavLink>
                <NavLink to={`/category/varios`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Varios</NavLink>
            </div>
                <CartWidget />

        </nav>
    )
}

export default NavBar