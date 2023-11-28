import React, { useState } from 'react';
import "./Hamburger.css";

function Hamburger() {

  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show)
  }
  return (
    <div className='menu-wrap'>
      <input onClick={handleMenu} type="checkbox" name="" id=""  className='toggler'/>
      <div className="hamburger">
        <div></div>
      </div>
     { show && <div className="menu-background">
        <div>
        <div className='menu-container'>
    <div className='menu'>
        <ul>
        <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
        </ul>
    </div> 
    </div>
        </div>
      </div>}
    </div>
  );
}

export default Hamburger;
