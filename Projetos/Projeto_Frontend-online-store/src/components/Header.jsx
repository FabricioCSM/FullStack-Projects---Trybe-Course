import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../logo.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <img src={ logo } alt="Logo" />
        </Link>
        <Link to="/cart" data-testid="shopping-cart-button">
          <FaShoppingCart />
        </Link>
      </div>
    );
  }
}

export default Header;
