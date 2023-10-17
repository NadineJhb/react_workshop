import propTypes from 'prop-types';
import '../css/NavBar.css';
import { FiShoppingBag } from "react-icons/fi";

const NavBar = ( {/*item, setItem,*/ total, count} ) => {

    
    return (
        <nav>
            <div className="wildShop">
                <div className="logo-container">
                    <img src="/vite.svg" alt="logo_vite" />
                </div>
                <p>Wild Shop</p>
            </div>
            <div className="links">
                <p>Accueil</p>
                <p>A propos de nous</p>
                <p>Nous contacter</p>
                <div className='shopping-cart'>
                    <p className='shoppingIcon'><FiShoppingBag />{total}</p>
                    <p>{count.toFixed(2)} €</p>  
                </div>
            </div>
        </nav>
    );
};

NavBar.propTypes = {
    item: propTypes.shape(
        {
            name: propTypes.string.isRequired,
            price: propTypes.number.isRequired,
            picture: propTypes.string.isRequired,
            description: propTypes.string.isRequired
        }
    ),
    setItem: propTypes.func.isRequired,
    total: propTypes.number.isRequired,
    count: propTypes.number.isRequired,
    setCount: propTypes.func.isRequired
}

export default NavBar; 