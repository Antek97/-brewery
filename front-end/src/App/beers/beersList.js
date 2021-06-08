import React from 'react';
import Beer from './beer';

const BeersList = (props) => {
  
  const search = props.search
  const done = props.beers
  
  const beers = done.map(beer => <Beer key={beer.id} beer={beer} deleteBeer={props.deleteBeer}/>)
  let found = beers.filter(e =>e.props.beer.beerName.toLowerCase().includes(search.toLowerCase(), [0]))

  done.sort((a,b) => b.id - a.id)

  return ( 
    <>
      {search === '' ? beers : found}
    </>
  );
}
 
export default BeersList;


