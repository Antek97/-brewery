import React from 'react';
import Beer from './beer';

const BeersList = ( props ) => {
  
  const done = props.beers
  done.sort((a,b) => b.id - a.id)
  const beers = done.map(beer => <Beer key={beer.id} beer={beer} deleteBeer={props.deleteBeer}/>)
 
 
  return ( 
    <div>
      {beers}
    </div>
  );
}
 
export default BeersList;