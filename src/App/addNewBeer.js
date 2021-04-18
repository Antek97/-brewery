import React from 'react';
import Menu from './menu'
import App from '../App'



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
    

  render() {
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
          <div className="mainStarPanel__oneStar star" onClick={() => this.setState({rating:1})}><i class="fas fa-star"></i></div>
          <div className="mainStarPanel__twoStar star" onClick={() => this.setState({rating:2})}><i class="fas fa-star"></i></div>
          <div className="mainStarPanel__threeStar star" onClick={() => this.setState({rating:3})}><i class="fas fa-star"></i></div>
          <div className="mainStarPanel__fourStar star" onClick={() => this.setState({rating:4})}><i class="fas fa-star"></i></div>
          <div className="mainStarPanel__fiveStar star" onClick={() => this.setState({rating:5})}><i class="fas fa-star"></i></div>
        </div>
        <button className="beerAddingPanel__btnAdd" onClick={this.handleClickAddBeer}>Add</button>
        <div className="beerAddingPanel__Date">{this.state.dataAdded}</div>
        </div>
     );
  }
}
 
export default NewBeer;

