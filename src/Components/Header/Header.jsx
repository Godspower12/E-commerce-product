import React from 'react';
import Logo from "../../images/logo.svg"
import "./Header.css";
import Cart from "../../images/icon-cart.svg";

import Profile from "../../images/image-avatar.png"
import Hamburger from '../Hamburger/Hamburger';

const Header = ({amount, showCart, setShowCart, showDetails}) => {


  const handleShowCart = () => {
    setShowCart(!showCart)
  }
  return (
    <div>
    <div className='header-container'>

      {/* Left header */}
      <div className="header-left">
        <Hamburger/>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
   <div className="menu">
    <ul>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
   </div>
      </div>

      {/* Right side */}
      <div className="header-right">
        <div className="image" onClick={handleShowCart}>
          {amount > 0 && showDetails ? <div className="item-number">{amount}</div> : ""}
        <img src= {Cart} alt="cart" />
        </div>
        <img src= {Profile} alt="profile" />
      </div>
    </div>
    <hr />
    </div>
  );
}

export default Header;
