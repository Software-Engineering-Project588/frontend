import { useContext } from 'react';
import { Link } from 'react-router-dom'
import './index.css';
import { WishlistContext } from '../WishListContext';
import Navbar from '../Navbar';
import Footer from '../Footer';

const WishList = () => {
    const { wishlist } = useContext(WishlistContext);

    return (
        <div>
            <Navbar />
            <div className='wishList-content'>
                {wishlist.length === 0 ? (
                    <p className='empty'>Your wishlist is empty.</p>
                ) : (
                    <ul>
                        {wishlist.map((item) => (
                            <div key={item.id} className="wishlist-item">
                                <h2 >{item.collegeName}</h2>
                                <p className='desc'>Location: {item.location}</p>
                                <p className='desc'>Description: {item.description}</p>
                                <Link to={`/college/${item.id}`}>
                                    <button className='visit-btn'>Visit</button>
                                </Link>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
           
        </div>
    );
};

export default WishList;
