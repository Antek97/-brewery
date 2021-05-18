import { createContext } from 'react';

const defoultImgBeer = 'https://thumbs.dreamstime.com/b/szk%C5%82o-piwo-z-piany-linii-ikon%C4%85-kubek-zimnego-piwa-wektorowa-ilustracja-odizolowywaj%C4%85ca-na-bielu-piwny-spienia-kontur-125545431.jpg';

export const defaultObiect = {
  usserLogged: false,
  gender:'choose',
  id:'0',
  name:'usser',
  beers:[
    {
    id:0,
    beerName: 'Bloody IPA',
    styleBeer: 'IPA - American',
    brewery: 'Deer Bear',
    rating: 3,
    dataAdded: 3,
    bearImg: defoultImgBeer,
    },{
    id:1,
    beerName: 'KAME HAME',
    styleBeer: 'IPA - Milkshake',
    brewery: 'Deer Bear',
    rating: 4,
    dataAdded: 2,
    bearImg: defoultImgBeer,
    },{
    id:2,
    beerName: 'Noemi',
    styleBeer: 'IPA - Triple New England',
    brewery: 'Deer Bear',
    rating: 5,
    dataAdded: 1,
    bearImg: defoultImgBeer,
    }
  ]
};
// setInterval(function(){console.log(defaultObiect.beers);}, 3000);



export const AppContext = createContext(defaultObiect);

