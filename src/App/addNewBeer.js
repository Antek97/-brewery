import React from 'react';
import Menu from './menu';
import App from '../App';
import { BsStar } from "react-icons/bs";
import { render } from '@testing-library/react';


const starsNumber = 5;


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

    rate = star =>{
      console.log(star)
      this.setState({ rating : star });
    }
    
  render() {
    let stars = []
    for(let x = 1; x <= starsNumber; x++){
      stars.push(
        <div key={x} onClick={() => {this.rate(x)}}>
          <StarRating filled={x <= this.state.rating ? true : false}  />
        </div>
      )
    }
    return ( 
      <div className="beerAddingPanel">
        <div className="beerAddingPanel__imputsContainer">
          <h1 className="beerAddingPanel__h1">Beer Name</h1>
          <input className="beerAddingPanel__BeerName" type="text" placeholder="BeerName" value={this.state.beerName} onChange={this.handlechengeValueBeerName}></input>
          <h1 className="beerAddingPanel__h1">Beer Style</h1>
          <input className="beerAddingPanel__BeerStyle" type="text" placeholder="BeerStyle" value={this.state.styleBeer} onChange={this.handlechengeValueBeerStyle}></input>
          <h1 className="beerAddingPanel__h1">Brewery</h1>
          <input className="beerAddingPanel__Brewery" type="text" placeholder="Brewery" value={this.state.brewery} onChange={this.handlechengeValueBrewery}></input>
        </div>
        <div className="mainStarPanel">
          {stars}
        </div>
        <button className="beerAddingPanel__btnAdd" onClick={this.handleClickAddBeer}>Add</button>
        <div className="beerAddingPanel__Date">{this.state.dataAdded}</div>
        </div>
     );
  }
}

class StarRating extends React.Component {
  state = {  }
  render() { 
    return (<div className={this.props.filled === true ? "starOn" : "starOff" }><BsStar/></div>);
  }
}
 
export default NewBeer;

     
