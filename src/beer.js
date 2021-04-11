import React, { Component } from 'react';

const Beer = (props) => {
  
  const {id, beerName, styleBeer, brewery, rating} = props.beer;
  
  return ( 
    <div>
       <div></div>
       <h1>{beerName}</h1>
       <p>{styleBeer}</p>
       <p>{brewery}</p>
       <p>{rating}</p>
       <button onClick={()=>props.deleteBeer(id)}>Usuń Piwo</button>
    </div>
  );
}

export default Beer;