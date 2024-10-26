import { useContext } from 'react';
import { Link } from 'react-router-dom'
import './index.css';
import { WishlistContext } from '../WishListContext';
import Navbar from '../Navbar';

const WishList = () => {
    const { wishlist } = useContext(WishlistContext);

    return (
        <div>
            <Navbar />
            <div className='wishList-content'>
                {wishlist.length === 0 ? (
                    <p>Your wishlist is empty.</p>
                ) : (
                    <ul>
                        {wishlist.map((item) => (
                            <li key={item.id} className="wishlist-item">
                                <h2>{item.collegeName}</h2>
                                <p>Location: {item.location}</p>
                                <p>Description: {item.description}</p>
                                <Link to={`/college/${item.id}`}>
                                    <button>Visit</button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default WishList;
