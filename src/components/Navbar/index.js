import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Navbar = (props) => { 
  const onLogout = () => {
    Cookies.remove('jwt_token')
    props.history.replace('/login')
  }

  return (
    <div className='nav-bar'>
      <img src="https://img.freepik.com/premium-vector/aircraft-lamp-logo-design-innovative-sleek-vector-concept_579306-26262.jpg?w=740"
       className='logo'
       alt="logo"
        />
      <button className='logout-btn' onClick={onLogout}>Logout</button>
    </div>
  );
};

export default withRouter(Navbar);
