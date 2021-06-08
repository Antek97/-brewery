import react from 'react';

import { BsStar } from "react-icons/bs";

const Beer = (props) => {
  
  const {id, beerName, styleBeer, brewery, rating, bearImg } = props.beer;

  const allStars = 5;
  const arrRating = [];
  
  function ratingStars(){
    for (let star = 0; star < rating; star++) {
      arrRating.push("star")
    }
    for (let star = rating ; star < allStars; star++) {
      arrRating.push("starEmpty")
    }  
    let mapStar = arrRating.map((rate, indx) => <BsStar user={rate} key={indx} className={rate === "star" ? "starFull" : "starEmpty" }/>); 
    return mapStar;
}

  return ( 
    
    <div className="beerView">
       <img src={bearImg} alt="" id="img" draggable="false" className="beerView__imageBeer"></img>
       <div className="beerView__container">
          <h1 className="beerView__beerName">{beerName}</h1>
          <p className="beerView__styleBeer">{styleBeer}</p>
          <p className="beerView__brewery">{brewery}</p>
          <p className="beerView__rating">
            {ratingStars()}
            </p>
       </div>
       <button className="beerView__btnDelete" onClick={()=>props.deleteBeer(id)}>Usuń Piwo</button>
    </div>
  );
}

export default Beer;