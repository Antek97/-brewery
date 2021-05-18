import React from 'react';
import '../css/stylesApp.css';
import mainImg from '../Img/main.jpg';

const Slider =()=> {

    return (
      <div className="sliderCont">
        <section className="slider">
        <div className="slider__imagesContainer">
            <div className="slider__imageContainer slider__imageContainerFirst">
              <img className="slider__img" src={mainImg} alt="slider" draggable="false"></img>
            </div>
          </div>
        </section>
      </div>
     );
}
 
export default Slider;
