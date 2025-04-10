import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../img/logo.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <Link to="./"> <img  src={logo} alt='uplift-logo'/></Link>
      </div>
      <nav>
        <ul>
          <li className='login'><Link to="/login">Sign in</Link></li>
          <li className='signup'><Link to="/signup">Sign up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
