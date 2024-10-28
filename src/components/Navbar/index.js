import { withRouter, Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import './index.css';
import { WishlistContext } from '../WishListContext';

const Navbar = (props) => {
  const { wishlist } = useContext(WishlistContext);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('loggedInUser'));

  const onLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    props.history.replace('/login');
  };

  useEffect(() => {
    // Update `isLoggedIn` whenever `loggedInUser` in localStorage changes
    setIsLoggedIn(!!localStorage.getItem('loggedInUser'));
  }, []);

  return (
    <div className='nav-bar'>
      <div className='left-container'>
        <Link to='/'>
          <img 
            src="https://img.freepik.com/premium-vector/aircraft-lamp-logo-design-innovative-sleek-vector-concept_579306-26262.jpg?w=740"
            className='logo'
            alt="logo"
          />
        </Link>
      </div>
      <div className='right-container'>
        <Link to='/'>
          <button className="dropdown-toggle">
            Home
          </button>
        </Link>
        <Link to='/wish-list'>
          <button className="dropdown-toggle">
            WishList ({wishlist?.length})
          </button>
        </Link>
        <Link to='/applied'>
          <button className="dropdown-toggle">
            Applied
          </button>
        </Link>
        {isLoggedIn ? (
          <button className='logout-btn' onClick={onLogout}>Logout</button>
        ) : (
          <Link to='/login'>
            <button className='logout-btn'>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default withRouter(Navbar);
