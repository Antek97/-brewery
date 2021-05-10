import React from 'react';

import { BsStar } from "react-icons/bs";


const Beer = ( props ) => {
  
  const {id, beerName, styleBeer, brewery, rating, bearImg } = props.beer;

  const ratingStars = () => {
      if(rating === 1) return(<div><BsStar className="starFull"/> <BsStar className="starEmpty"/> <BsStar className="starEmpty"/> <BsStar className="starEmpty"/> <BsStar className="starEmpty"/></div>)
      else if(rating === 2 ) return(<div><BsStar className="starFull"/> <BsStar className="starFull"/> <BsStar className="starEmpty"/> <BsStar className="starEmpty"/> <BsStar className="starEmpty"/></div>)
      else if(rating === 3 ) return(<div><BsStar className="starFull"/> <BsStar className="starFull"/> <BsStar className="starFull"/> <BsStar className="starEmpty"/> <BsStar className="starEmpty"/></div>)
      else if(rating === 4 ) return(<div><BsStar className="starFull"/> <BsStar className="starFull"/> <BsStar className="starFull"/> <BsStar className="starFull"/> <BsStar className="starEmpty"/></div>)
      else if(rating === 5 ) return(<div><BsStar className="starFull"/> <BsStar className="starFull"/> <BsStar className="starFull"/> <BsStar className="starFull"/> <BsStar className="starFull"/></div>)
    }

  return ( 
    <div className="beerView">
       <img src={bearImg} alt="" id="img" draggable="false" className="beerView__imageBeer"></img>
       <div className="beerView__container">
          <h1 className="beerView__beerName">{beerName}</h1>
          <p className="beerView__styleBeer">{styleBeer}</p>
          <p className="beerView__brewery">{brewery}</p>
          <p className="beerView__rating">{ratingStars()}</p>
       </div>
       <button className="beerView__btnDelete" onClick={()=>props.deleteBeer(id)}>Usuń Piwo</button>
    </div>
  );
}

export default Beer;