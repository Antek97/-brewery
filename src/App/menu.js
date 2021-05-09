import React from 'react';

import '../css/stylesApp.css';

import { BiWrench, BiLeftArrow, BiToggleLeft, BiToggleRight } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";

import NewBeer from './addNewBeer';
import BeersList from './beersList';
import Contact from './contactForm';
import DescriptionApp from './descriptionApp';

 
class MainPage extends React.Component {
  state = {  }

  render() { 
    return ( 
    <div>
      <section className="MainTopPanel">
        <div className="MainTopPanel__options">
          <div className="MainTopPanel__optionsBtn">
              <AiFillSetting/>
            </div>
        </div>
        <div>
            <BiToggleLeft/>
            <BiToggleRight/>
        </div>
      </section>
      <div className=""></div>
        <section className="MainPageContainer">
          <DescriptionApp/>
        </section>
    </div> 
    );
  }
}

class Profile extends React.Component {
  state = { 
    profileImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwEuOE-oE-M5EGrxJAJJglaRMB9h-DEltpj6LfTi0GCCiWCqHd-oJZ_Q5pzlKMkm2RCQ&usqp=CAU",
    addImg:null,
    profileChange:false,
    contact:false,
    name: "Antek",
  }

  chengeDate =()=> {
    this.setState({
      profileChange: !this.state.profileChange
    })
  };

  imgChenge =()=> {
    this.setState({
      addImg : !this.state.profileChange
    })
  }

  onChangeImg =( e )=> {
    const reader = new FileReader();
    reader.onload =()=> {
      if(reader.readyState === 2){
        this.setState({profileImg : reader.result})
    }
  }
  reader.readAsDataURL(e.target.files[0])
  alert("avatar changed")
}

  render() { 

    const {profileImg} = this.state
    
    return ( 
      <section className="profile">
          <div className="profileContainer">
            <div className="topPanelEmpty"></div>
            <section className="topPanelProfile">
              {this.state.profileChange === false ? null : <p onClick={this.chengeDate} className="topPanelProfile__showBtnProfile"><BiLeftArrow/></p>}
            </section>
            <div className="profilePanel">
              <div className="profilePanel__imgContainer">
              <img src={profileImg} alt="" id="img" draggable="false" className="profilePanel__img"></img>
                <div className="profilePanel__AddImg" onClick={this.chengeDate}><BiWrench className="profilePanel__BiWrench"/></div>
                </div>
              <p className="profilePanel__name">{this.state.name}</p>
            </div>
        </div> 
        <div className={this.state.profileChange === false ? "hidePanel" : "showPanel"}>
          <div className="PanelProfileOn">
            <div className="PanelProfileOn__imgChange">
              <input type="file" onChange={this.onChangeImg} id="avatar" name="image-upload" accept="image/*"></input>  
              <label className="PanelProfileOn__label" htmlFor="avatar">Add picture</label>
            </div>
            <h1 className="PanelProfileOn__h1">Name</h1>
            <p className="PanelProfileOn__text">{this.state.name}</p>
            <h1 className="PanelProfileOn__h1">Gender</h1>
            <p className="PanelProfileOn__text">Male</p> 
          </div>
        </div>

      </section>
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

  searchBeer =( e )=> {
    this.setState({
      search: e.target.value
    })
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
        {this.state.flagForm ? <NewBeer add={this.addBeer}/> :
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