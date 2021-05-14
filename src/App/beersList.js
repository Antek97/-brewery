import React from 'react';
import Beer from './beer';

const BeersList = ( props ) => {
  
  const search = props.search
  const done = props.beers
  
  done.sort((a,b) => b.id - a.id)
  const beers = done.map(beer => <Beer key={beer.id} beer={beer} deleteBeer={props.deleteBeer}/>)
  const found = beers.find(e => e.props.beer.beerName === search )

  return ( 
    <div>
      {search === '' ? beers : found}
    </div>
  );
}
 
export default BeersList;