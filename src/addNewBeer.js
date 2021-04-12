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
      <div className="beerAddingPanel">
        <input type="text" placeholder="BeerName" value={this.state.beerName} onChange={this.handlechengeValueBeerName}></input>
        <input type="text" placeholder="BeerStyle" value={this.state.styleBeer} onChange={this.handlechengeValueBeerStyle}></input>
        <input type="text" placeholder="Brewery" value={this.state.brewery} onChange={this.handlechengeValueBrewery}></input>
        <div className="mainStarPanel">
          <div className="mainStarPanel__oneStar" onClick={() => this.setState({rating:1})}>1</div>
          <div className="mainStarPanel__twoStar" onClick={() => this.setState({rating:2})}>2</div>
          <div className="mainStarPanel__threeStar" onClick={() => this.setState({rating:3})}>3</div>
          <div className="mainStarPanel__fourStar" onClick={() => this.setState({rating:4})}>4</div>
          <div className="mainStarPanel__fiveStar" onClick={() => this.setState({rating:5})}>5</div>
        </div>
        <div className="beerAddingPanel__Date">{this.state.dataAdded}</div>
        <button className="beerAddingPanel__btnAdd" onClick={this.handleClickAddBeer}>Add</button>
        </div>
     );
  }
}
 
export default NewBeer;

