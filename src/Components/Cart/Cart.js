import React from 'react';
import "./Cart.css";
import { FaTrash } from 'react-icons/fa';


const Cart = ({setShowDetails, ShowDetails, products, value, price, amount, setAmount}) => {



  const {MainImage} =  products[value];


  const handleDelete = () => {
    setShowDetails(false)
    setAmount(0)
  }

  return (
    <div className='cart-wrapper'>
    {!ShowDetails && amount === 0 ? <div className='cart-contents'><p className='empty-cart'>Your cart is empty</p></div>  : <div className="cart-contents">
     <div className="title">
        <p>Cart</p>
      </div>
      <hr />
      <div className="cart-details">
        <img src= {MainImage} alt="" />
        <div className="products-details">
        <p>Fall Limited Edition Sneakers</p>
        <p>${price} x {amount} <span>${price * amount}</span></p>
        </div>

        <div onClick={handleDelete} className="icon"><FaTrash/></div>
      </div>
      <div className="btn-checkout">
        <button>Checkout</button>
      </div>
     </div>}
  
    </div>
  );
}

export default Cart;
