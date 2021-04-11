import React from 'react';
import Menu from './menu.js'
import App from './App'


class NewBeer extends React.Component {
  
  state = {
    beerName:'',
    styleBeer:'',
    brewery:'',
    rating:'',
    dataAdded: new Date().toISOString().slice(0,10),
    }

    handlechengeValueBeerName =(e)=> {
      this.setState({
        beerName: e.target.value
      })
    }

    handlechengeValueBeerStyle =(e)=> {
      this.setState({
        styleBeer: e.target.value
      })
      console.log(this.state.styleBeer)
    }

    handlechengeValueBrewery =(e)=> {
      this.setState({
        brewery: e.target.value
      })
    }

    handleClickAddBeer =()=> {

      const { beerName, styleBeer, brewery, rating, dataAdded } = this.state;
      if (beerName.length < 12 && styleBeer.length < 12 && brewery.length < 12 &&
        beerName.length >= 1 && styleBeer.length >= 1 && brewery.length >= 1) {
        const add = this.props.add(beerName, styleBeer, brewery, rating, dataAdded)

        if (add) {
          this.setState({
            beerName:'',
            styleBeer:'',
            brewery:'',
            rating:'',
            dataAdded: new Date().toISOString().slice(0,10),
          })
        }
      }else{
        alert("Field cannot contain more than 12 characters")
      }
    }

  render() {
    return ( 
      <div>
        <input type="text" placeholder="BeerName" value={this.state.beerName} onChange={this.handlechengeValueBeerName}></input>
        <input type="text" placeholder="BeerStyle" value={this.state.styleBeer} onChange={this.handlechengeValueBeerStyle}></input>
        <input type="text" placeholder="Brewery" value={this.state.brewery} onChange={this.handlechengeValueBrewery}></input>
        <div>
          1<input type="checkbox" value={this.state.rating}></input>
          2<input type="checkbox" value={this.state.rating}></input>
          3<input type="checkbox" value={this.state.rating}></input>
          4<input type="checkbox" value={this.state.rating}></input>
          5<input type="checkbox" value={this.state.rating}></input>
        </div>
        <div>{this.state.dataAdded}</div>
        <button onClick={this.handleClickAddBeer}>Add</button>
        </div>
     );
  }
}
 
export default NewBeer;

