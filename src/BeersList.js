import React from 'react';
import Beer from './beer';

const BeersList = (props) => {
  
  const beers = props.beers.map(beer => <Beer key={beer.id} beer={beer} deleteBeer={props.deleteBeer}/>)
  
  return ( 
    <div>
      {beers}
    </div>
  );
}
 
export default BeersList;