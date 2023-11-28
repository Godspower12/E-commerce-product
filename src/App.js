import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import LightBox from './Components/LightBox/LightBox';
import Main from './Components/Main/Main';
import { Data } from './Data';
function App() {

  const [products] = useState(Data)
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0)
  const [price, setPrice] = useState(125.00);
  const [canceledPrice] = useState(250.00)
  const [showCart, setShowCart] =  useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  const [showLightbox, setShowLightbox] = useState(false)

  
  

  
  const {MainImage} =  products[value]
  
  

  const [slideIndex, setSlideIndex] = useState(1);
  
  const nextSlide = () => {
    if(slideIndex !== products.length){
      setSlideIndex(slideIndex + 1)
    }else if(slideIndex === products.length) {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
    }else if(slideIndex ===1) {
      setSlideIndex(products.length)
    }
  }



  
  const [prod, setProd] = useState({
    image : MainImage,
    title : "Fall Limited Edition Sneakers",
    price : price
  }) 

  return (
    <div className="App">
      <Header showDetails = {showDetails} showCart= {showCart} setShowCart={setShowCart} price = {price} products = {products} prod= {prod} setProd = {setProd} value = {value} setValue = {setValue} amount = {amount} setAmount = {setAmount}/>
      {showLightbox && <LightBox showLightbox = {showLightbox} setShowLightbox = {setShowLightbox} slideIndex ={slideIndex} setSlideIndex ={setSlideIndex} nextSlide = {nextSlide} prevSlide ={prevSlide} products = {products}/>}
       <Main showLightbox = {showLightbox} setShowLightbox = {setShowLightbox} slideIndex ={slideIndex} setSlideIndex ={setSlideIndex} nextSlide = {nextSlide} prevSlide ={prevSlide} showDetails = {showDetails} setShowDetails = {setShowDetails} showCart= {showCart} canceledPrice = {canceledPrice} price = {price} setPrice = {setPrice} products = {products} value = {value} setValue = {setValue} amount = {amount} setAmount = {setAmount}/>
       <div class="attribution">
    <span> Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. </span>
   <span> Coded by <a href="https://godspowerogbudhu.netlify.app/">Godspower</a>.</span> 
  </div>
     </div>
  );
}

export default App;
