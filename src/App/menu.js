import React from 'react';
import '../css/stylesApp.css';
// import '../css/style.css';
import NewBeer from './addNewBeer';
import BeersList from './BeersList';
import Contact from './contactForm';
 
class MainPage extends React.Component {
  state = {  }

  render() { 
    return ( 
    <div>
      <section className="topPanel">
    <div className="topPanel__options"></div>
    <div></div>
      </section>
    </div> 
    );
  }
}

class Profile extends React.Component {
  state = { 
    contact:false,
    name: "Antek",
   }
  SetAvatar=()=>{
    console.log("hello")
  };
  
  render() { 
    return ( 
      <>
          <div className="profileContainer">
            <div className="topPanelEmpty"></div>
            <section className="topPanel"></section>
            <div className="profilePanel">
              <div className="profilePanel__img">
                <div className="profilePanel__AddImg" onClick={this.SetAvatar}></div>
                </div>
              <p className="profilePanel__name">{this.state.name}</p>
            </div>
        </div> 
        <button 
        className={this.state.contact === true ? "openContactForm" : "closeReactForm" } 
        onClick={()=>this.setState({contact:!this.state.contact})}>
          {this.state.contact === true ? "X" : "Email"}
        </button>
      </>
    );
  }
}

 
class Beers extends React.Component {
  counter = 3
  state = { 
    search:null,
    flagForm: false,
    beers:[
      {
      id:0,
      beerName: 'Bloody IPA',
      styleBeer: 'IPA - American',
      brewery: 'Deer Bear',
      rating: 3,
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
      rating: 5,
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

  searchBeer =(e)=> {
    this.setState({
      search: e.target.value
    })
    console.log(this.state.search)
    //filtr()
  }

  deleteBeer =( id )=> {
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
        <div className="beersContainer">
          <div className="topPanelEmpty"></div>
          <section className="topPanel">
            <form className="topPanel__container">
              <h1 className="topPanel__h1">Find</h1>
              <div className="topPanel__searchContainer">
                <div className="topPanel__search">
                  <p>🔍</p>
                  <input className="topPanel__input" type='text' placeholder="Search" onChange={this.searchBeer}></input></div>
              </div>
            </form>
          </section>
          <ul>
            <BeersList beers={this.state.beers} deleteBeer={this.deleteBeer} search={this.state.search}/>
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