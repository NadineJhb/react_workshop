import '../css/NavBar.css';
import { FiShoppingBag } from "react-icons/fi";

const NavBar = ( {item, setItem, total} ) => {

    
    
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
                <p><FiShoppingBag />{total}</p>
            </div>
        </nav>
    );
};

// NavBar.propTypes = {
//     item: 
// }

export default NavBar; 