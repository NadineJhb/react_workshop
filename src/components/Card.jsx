import propTypes from 'prop-types';
import { useState } from 'react';


const Card = ( {name, price, picture, description, total, setTotal, count, setCount} ) => {
    const [item, setItem] = useState(0);

    const handleLess = () => {
        setItem(item - 1)
        setTotal(total - 1)
        setCount(count + price)
        
    }
    const handleMore = () => {
        setItem(item + 1)
        setTotal(total + 1)
        setCount(count + price)
    }


    return (
        <div className="card">
            <div className="image-container">
                <img src={picture} alt={name} />
            </div>
            <div className="product-information">
                <div className="left">
                    <p className="product-name">{name}</p>
                    <p className="blurb">{description}</p> 
                </div>
                <div className="right">
                    <p className="price">{price} EUR</p>
                    <div className='button'>
                        {item > 0 && <button onClick={handleLess}>-</button>}
                        <p>{item}</p>
                        <button onClick={handleMore}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    picture: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    total: propTypes.number.isRequired,
    setTotal: propTypes.func.isRequired,
    count: propTypes.number.isRequired,
    setCount: propTypes.func.isRequired
}

export default Card;