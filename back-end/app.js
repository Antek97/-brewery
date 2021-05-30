const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send();
});

app.get('/ussers/guest', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const guest = [
    {id: 1, name: 'guest1', pas:'123' },
  ];
  res.send(guest)
});

const defoultImgBeer = 'https://thumbs.dreamstime.com/b/szk%C5%82o-piwo-z-piany-linii-ikon%C4%85-kubek-zimnego-piwa-wektorowa-ilustracja-odizolowywaj%C4%85ca-na-bielu-piwny-spienia-kontur-125545431.jpg';

let beers = 
  [
    {
    id:0,
    beerName: 'Bloody IPA',
    styleBeer: 'IPA - American',
    brewery: 'Deer Bear',
    rating: 3,
    dataAdded: 3,
    bearImg: defoultImgBeer,
    }
    ,{
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

app.get('/ussers/guest/beers', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');  
  res.json(beers)
  console.log(beers)
});
app.post('/ussers/guest/beers', function (req, res) {
  req.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');  
  req.json(beers)
});
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


