import React from 'react';
import './css/style.css';
import NewBeer from './addNewBeer';
import BeersList from './BeersList';


class MainPage extends React.Component {
  state = {  }
  render() { 
    return ( <div>2</div> );
  }
}

class Profile extends React.Component {
  state = {  }
  render() { 
    return ( 
    <div className="profileContainer">
      <div className="topPanelEmpty"></div>
      <section className="topPanel"></section>
      <div className="profilePanel">
        <div className="profilePanel__img"></div>
        <p className="profilePanel__name">Name</p>
      </div>
    </div> 
    );
  }
}
 
class Beers extends React.Component {
  counter = 3
  state = { 
    flagForm: false,
    beers:[
      {
      id:4,
      beerName: 'Bloody IPA',
      styleBeer: 'IPA - American',
      brewery: 'Deer Bear',
      rating: 4.25,
      dataAdded: 3,
      },{
      id:1,
      beerName: 'KAME HAME',
      styleBeer: 'IPA - Milkshake',
      brewery: 'Deer Bear',
      rating: 4,
      dataAdded: 2,
      },{
      id:2,
      beerName: 'Noemi',
      styleBeer: 'IPA - Triple New England',
      brewery: 'Deer Bear',
      rating: 4.5,
      dataAdded: 1,
      }
    ]
  }

  addBeer =( beerName, styleBeer, brewery, rating, dataAdded )=> {
    const beer = {
      id: this.counter,
      beerName,
      styleBeer,
      brewery,
      rating,
      dataAdded,
    }

    this.counter++

    this.setState( prevState => ({
      beers: [...prevState.beers, beer]
    }))

    return true
  }

  deleteBeer = ( id ) => {
    const beers = [...this.state.beers]
    const index = beers.findIndex(beer => beer.id === id);
    beers.splice(index, 1);
    this.setState({
      beers
    })
  }

  onChangeFlagForm =()=> {
    this.setState({
      flagForm: !this.state.flagForm,
    })
  }

  render() { 
    return (
      <>
        {this.state.flagForm === true ? <NewBeer add={this.addBeer}/> :
        <div className="">
          <div className="topPanelEmpty"></div>
          <section className="topPanel">
            <form className="topPanel__container">
              <h1>Find</h1>
              <div className=""><p>🔍</p><input type='text' placeholder="Search"></input></div>
            </form>
          </section>
          <ul>
            <BeersList beers={this.state.beers} deleteBeer={this.deleteBeer}/>
          </ul>
          <div></div>
        </div>
        }
        <button className="addbeer" onClick={this.onChangeFlagForm}>+</button>
      </>
     );
  }
}
 
class Menu extends React.Component {
  state = { 
    Layer : MainPage
   }

  mainPage = () =>{
    this.setState({
        Layer : MainPage
    })
  }

  handleklickBeers = () =>{
    this.setState({
        Layer : Beers
    })
  }

  whereBuy = () =>{
    this.setState({
        Layer : Profile
    })
    
  }


  render() { 
    return (
      <> 
        {React.createElement(this.state.Layer)}
        <section className="menu">
            <ul className="menu__list">
              <li className="menu__btn" onClick={this.mainPage}><a>+</a></li>
              <li className="menu__btn" onClick={this.handleklickBeers}><a>+</a></li>
              <li className="menu__btn" onClick={this.whereBuy}><a>+</a></li>
            </ul>
        </section>

      </>
     );
  }
}
 
export default Menu;