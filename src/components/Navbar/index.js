import { withRouter, Link } from 'react-router-dom'
import { useContext } from 'react';
import Cookies from 'js-cookie'
import './index.css'
import { WishlistContext } from '../WishListContext';

const Navbar = (props) => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    props.history.replace('/login')
  }

  const {wishlist} = useContext(WishlistContext)

  return (
    <div className='nav-bar'>
      <div className='left-container'>
        <Link to='/'>
          <img src="https://img.freepik.com/premium-vector/aircraft-lamp-logo-design-innovative-sleek-vector-concept_579306-26262.jpg?w=740"
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
            WishList({wishlist?.length})
          </button>
        </Link>
        {/* <div className="dropdown">
          <p className="dropdown-toggle">Products</p>
          <div className="dropdown-content">
            <a href="#">Category 1</a>
            <a href="#">Category 2</a>
            <a href="#">Category 3</a>
          </div>
        </div>
        <div className="dropdown">
          <p className="dropdown-toggle">Services</p>
          <div className="dropdown-content">
            <a href="#">Service A</a>
            <a href="#">Service B</a>
            <a href="#">Service C</a>
          </div>
        </div>
        <div className="dropdown">
          <p className="dropdown-toggle">Contact</p>
          <div className="dropdown-content">
            <a href="#">Email</a>
            <a href="#">Phone</a>
            <a href="#">Address</a>
          </div>
        </div> */}
        <button className='logout-btn' onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
