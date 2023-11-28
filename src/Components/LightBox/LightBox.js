import React from 'react';
import "./LightBox.css"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const LightBox = ({showLightbox, setShowLightbox, products, nextSlide, prevSlide, slideIndex}) => {
  
  const handleCancelLightbox = () => {
    setShowLightbox(false);
  }
  
  return (
    <article className='lightbox'>
      <div onClick={handleCancelLightbox} className='cancelLightbox'>X</div>
     <div className='lightbox-contents'>
      {products.map((item, index) => (
       
      <div key = {index} className= {slideIndex === index + 1 ? 'lightbox-img' : "hide"}>
        <img src={item.MainImage} alt="image" />

        <ul>
            <li><button onClick={prevSlide}><FaChevronLeft/></button></li>
            <li><button onClick={nextSlide}><FaChevronRight/></button></li>
          </ul>
      </div>
      ))}
     </div>
    
    </article>
  );
}

export default LightBox;
