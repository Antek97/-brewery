import React from 'react';
import '../css/stylesApp.css';
import slider1 from '../Img/slider1.jpg';
import slider2 from '../Img/slider2.jpg';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

class Slider extends React.Component {
  state = {  }
  render() { 
    return (
      <section className="slider">
      <div className="slider__imagesContainer">
          <div className="slider__imageContainer slider__imageContainerFirst">
            <img src={slider1} alt="slider" draggable="false"></img>
          </div>
          <div className="slider__imageContainer slider__imageContainerSecond">
            <img src={slider2} alt="slider" draggable="false"></img>
          </div>
        </div>
        <div className="slider__divider">
          <div className="slider__handle">
            <FiChevronLeft/>
            <FiChevronRight/>
          </div>
        </div>
      </section>
     );
  }
}
 
export default Slider;