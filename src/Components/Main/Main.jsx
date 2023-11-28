import React from 'react';
import "./Main.css";
import { FaShoppingCart } from 'react-icons/fa';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import plus from "../../images/icon-plus.svg"
import minus from "../../images/icon-minus.svg"
import Carts from "../Cart/Cart"


const Main = ({ showLightbox, setShowLightbox, slideIndex, nextSlide, prevSlide, ShowDetails, setShowDetails, showCart, canceledPrice, price, setPrice, products, value, setValue, amount, setAmount}) => {

  const {MainImage} =  products[value]
  

  
  

   const handleMinus = () => {
    setAmount(amount - 1)
    if(amount <= 0) {
      setAmount(0)
    }
   }
    
  const HandleShowDetails = () => {
    setShowDetails(true)
  }
  

  const handleLightbox = () => {
    setShowLightbox(!showLightbox);
  }
  return (
    <div className='main'>
     { showCart && <Carts setShowDetails = {setShowDetails} ShowDetails = {ShowDetails} price = {price} products = {products}  value = {value}  amount = {amount} setAmount={setAmount}/>}
      <div className="main-left">
<div className='mainImage-display-mobile' >
{products.map((items, index) => (
            <div key={items.id} className={slideIndex === index + 1 ? 'chev' : "hide"}>
            <img src={items.MainImage} alt="main-img" onClick={handleLightbox}/>
            <ul>
            <li><button onClick={prevSlide}><FaChevronLeft/></button></li>
            <li><button onClick={nextSlide}><FaChevronRight/></button></li>
          </ul>
             </div>
        ))}
 
</div>


<div className='mainImage-display-desktop' >
            <img src={MainImage} alt="main-img" onClick={handleLightbox}/>
</div>

      <div className="thumbnails">
        <ul>
        {products.map((item, index) => (
            <li className = {` thumbnail-border ${index === value && "border"}`} key={item.id} onClick={() => setValue(index)}>
            <img src={item.Thumbnail} alt="thumbnails" />
            </li>
        ))}
        </ul>
          </div>
      </div>
      <div className="main-right">
        <span>SNEAKER COMPANY</span>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect
           casual wear companion.
           Featuring a durable rubber outer sole, 
           they’ll withstand everything the weather can offer.</p>
           
           <div className="main-pricing">
           <div className="pricing">
            <h2>${amount === 0 ? 125 : price * amount}</h2>
            <p>50%</p>
           </div>
            <div className='canceled-price'>
           <p>${amount === 0 ? 250 : canceledPrice * amount}</p>

           </div>

            </div>
           <div className="buttons">
            <div className="signs">
             <ul>
              <li onClick={handleMinus}>
         <img src= {minus} alt="" />
              </li>
              <li>{amount}</li>
              <li onClick={ () => setAmount(amount + 1)
                }>
         <img src= {plus} alt="" />
              </li>
             </ul>
             
            </div>
            <div className="btn-cart">
              <button onClick={HandleShowDetails}>
              <FaShoppingCart/>  

                <h4>Add to Cart</h4></button>
            </div>
           </div>
      </div>

    
    </div>
  );
}

export default Main;




 