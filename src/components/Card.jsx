import propTypes from 'prop-types';
import { useState } from 'react';

const Card = ( {name, price, picture, description} ) => {

    const [item, setItem] = useState(0);

    const handleLess = () => {
        setItem(item - 1)
    }
    const handleMore = () => {
        setItem(item + 1)
    }

    return (
        <div className="card">
            <div className="image-container">
                <img src={picture} alt={name} />
            </div>
            <div>
                <p className="name">{name}</p>
                <p className="description">{description}</p> 
            </div>
            <div>
                <p className="price">{price} EUR</p>
                {item > 0 && <button onClick={handleLess}>-</button>}
                <p>{item}</p>
                <button onClick={handleMore}>+</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    picture: propTypes.string.isRequired,
    description: propTypes.string.isRequired
}

export default Card;