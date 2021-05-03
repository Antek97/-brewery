import React from 'react';
import '../css/stylesApp.css';
import slider1 from '../Img/slider1.jpg';
import slider2 from '../Img/slider2.jpg';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

let dragging = false;

// window.div.addEventListener('keydown', (event) => {
// });
// imageContainerFirst
//   width: 100%

// mageContainerSecond
//   width: 50%

let widthLeft = 50;

const Slider =()=> {

  const widthRight = "100%";

  const leftSlide =()=> {
    if(widthLeft > 0){
      widthLeft = widthLeft - 10
    }
    console.log(widthLeft)
  }


  
  const RightSlide =()=>{
    if(widthLeft < 100){
      widthLeft = widthLeft + 10
    }
    console.log(widthLeft)
  }
  
    return (
      <div className="sliderCont">
        <section className="slider">
        <div className="slider__imagesContainer">
            <div className="slider__imageContainer slider__imageContainerFirst">
              <img src={slider1} alt="slider" draggable="false"></img>
            </div>
            <div style={{width: {widthLeft}}} className="slider__imageContainer slider__imageContainerSecond">
              <img src={slider2} alt="slider" draggable="false"></img>
            </div>
          </div>
          <div className="slider__divider">
            <div className="slider__handle">
              <FiChevronLeft  onClick={leftSlide}/>
              <FiChevronRight onClick={RightSlide}/>
            </div>
          </div>
        </section>
      </div>
     );
}
 
export default Slider;
// `Witaj ${klient.imie}!
// Przed chwila kupiłeś ${koszyk.ilosc} produktów o łącznej kwocie ${koszyk.cena.toFixed(2)}zl.`