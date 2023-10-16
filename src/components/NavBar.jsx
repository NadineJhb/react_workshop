import '../css/NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div className="logo-container">
                <img src="/vite.svg" alt="logo_vite" />
            </div>
            <div className="links">
                <p>Accueil</p>
                <p>A propos de nous</p>
                <p>Nous contacter</p>
            </div>
        </nav>
    );
};

export default NavBar; 