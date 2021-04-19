import React from 'react';

const Beer = (props) => {
  
  const {id, beerName, styleBeer, brewery, rating } = props.beer;

  const ratingStars = () => {
      if(rating === 1) return(<div>🔥 💧 💧 💧 💧</div>)
      else if(rating === 2 ) return(<div>🔥 🔥 💧 💧 💧</div>)
      else if(rating === 3 ) return(<div>🔥 🔥 🔥 💧 💧</div>)
      else if(rating === 4 ) return(<div>🔥 🔥 🔥 🔥 💧</div>)
      else if(rating === 5 ) return(<div>🔥 🔥 🔥 🔥 🔥</div>)
    }

  return ( 
    <div className="beerView">
       <div className="beerView__imageBeer"></div>
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