import React, { PureComponent } from 'react';

import { AppContext, defaultObiect } from '../State/AppContext';

import '../css/stylesApp.css';

import { BiWrench, BiLeftArrow } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";

import NewBeer from './beers/addNewBeer';
import BeersList from './beers/beersList';
import DescriptionApp from './main/descriptionApp';

 
class MainPage extends PureComponent {
  state = {  };

  render() { 
    return ( 
      <div>
        <section className="MainTopPanel">
          <div className="MainTopPanel__options">
            <div className="MainTopPanel__optionsBtn">
                <AiFillSetting/>
              </div>
          </div>
        </section>
          <section className="MainPageContainer">
            <DescriptionApp/>
          </section>
      </div> 
    );
  }
}


class Beers extends PureComponent {
  
  counter = 3 ;

  static contextType = AppContext ;

  state = { 
    search: '',
    flagForm: false,
    beers: defaultObiect.beers,
  };

  componentDidMount() {
    fetch("http://localhost:5000/ussers/guest/beers")
      .then(res => res.json())
      .catch(err => console.log(err))
      .then(beers => this.setState({beers: beers}))
  };

 

  addBeer = (beerName, styleBeer, brewery, rating, bearImg) => {
    const beer = {
      id: this.counter,
      beerName,
      styleBeer,
      brewery,
      rating,
      bearImg,
    };

    this.counter++

    this.setState(prevState => ({
      beers: [...prevState.beers, beer],
    }));

    this.setState({
      flagForm: !this.state.flagForm,
    });
    
    return true
  };

  searchBeer = (e) => {
    this.setState({
      search: e.target.value,
    })
  };

  deleteBeer = (id) => {
    const beers = [...this.state.beers];
    const index = beers.findIndex(beer => beer.id === id);
    beers.splice(index, 1);
    this.setState({
      beers,
    })
  };

  onChangeFlagForm = () => {
    this.setState({
      flagForm: !this.state.flagForm,
    })
  };

  render() { 

    return (
      <>
        {this.state.flagForm ? <NewBeer add={this.addBeer}/> :
          <div className="beersContainer">
            <div className="topPanelEmpty"></div>
            <section className="topPanel">
              <form className="topPanel__container">
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
          </div>
        }
        <button className="addbeer" onClick={this.onChangeFlagForm}><p className="AddBeerMobile">+</p><p className="AddBeerBrowser">Add Beer</p></button>
      </>
     );
  };
}


class Profile extends PureComponent {

  static contextType = AppContext;

  state = { 
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwEuOE-oE-M5EGrxJAJJglaRMB9h-DEltpj6LfTi0GCCiWCqHd-oJZ_Q5pzlKMkm2RCQ&usqp=CAU",
    addImg: null,
    profileChange: false,
    name: defaultObiect.name,
    gender: defaultObiect.gender,
    rating: defaultObiect.beers,
  }

  changeDate = () => {
    this.setState({
      profileChange: !this.state.profileChange,
    })
  };

  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  };

  changeGender = (e) => {
    this.setState({
      gender: e.target.value,
    })
  };
  
  imgChange = () => {
    this.setState({
      addImg : !this.state.profileChange,
    })
  };

  onChangeImg = (e) => {

    const reader = new FileReader();

    reader.onload = () => {
      if(reader.readyState === 2){
        this.setState({profileImg : reader.result})
    }
  };
   reader.readAsDataURL(e.target.files[0])
   alert("avatar changed")
  };

  render() { 
   
    const {profileImg, addImg, profileChange, name, gender, rating} = this.state;

    return ( 
      <section className="profile">
          <div className="profileContainer">
            <div className="topPanelEmptyProfile"></div>
            <section className="topPanelProfile">
              {profileChange === false ? null : <p onClick={this.changeDate} className="topPanelProfile__showBtnProfile"><BiLeftArrow/></p>}
            </section>
            <div className="profilePanel">
              <div className="profilePanel__imgContainer">
              <img src={profileImg} alt="" id="img" draggable="false" className="profilePanel__img"></img>
                <div className="profilePanel__AddImg" onClick={this.changeDate}><BiWrench className="profilePanel__BiWrench"/></div>
                </div>
              <p className="profilePanel__name">{name}</p>
            </div>
            <div className="UsserInfo">
              <h1 className="UsserInfo__name UsserInfo__h1">Name</h1>
              <p className="UsserInfo__name">{name}</p>
              <h1 className="UsserInfo__gender UsserInfo__h1">Gender</h1>
              <p className="UsserInfo__gender">{gender}</p> 
            </div>
        </div> 

        <div className={profileChange === false ? "hidePanel" : "showPanel"}>
          <div className="PanelProfileOn">
          <div className="PanelProfileOn__imgChange">
              <input type="file" onChange={this.onChangeImg} id="avatar" name="image-upload" accept="image/*"></input>  
              <label className="PanelProfileOn__label" htmlFor="avatar">Add picture</label>
          </div>
            <h1 className="PanelProfileOn__h1">Name</h1>
            <input className="PanelProfileOn__text" type="text" placeholder={name} value={name} onChange={this.changeName}></input>
            <h1 className="PanelProfileOn__h1">Gender</h1>
            <input className="PanelProfileOn__text" type="text" placeholder={gender} value={gender} onChange={this.changeGender}></input> 
            <button className="ButtonBackChange" onClick={this.changeDate}>Back</button>  
          </div>
        </div>

      </section>
    );
  };

}


class Menu extends PureComponent {
  state = { 
    Layer : MainPage
  };

  mainPage = () => {
    this.setState({
        Layer : MainPage
    })
  };

  handleklickBeers = () => {
    this.setState({
        Layer : Beers
    })
  };

  whereBuy = () => {
    this.setState({
        Layer : Profile
    })
  };

  render() { 
    return (
      <> 
        {React.createElement(this.state.Layer)}
        <section className="menu">
            <ul className="menu__list">
              <li className="menu__btn" onClick={this.mainPage}>
                <a className="mobileNav">+</a>
                <a className="webNav">HOME</a>
              </li>
              <li className="menu__btn" onClick={this.handleklickBeers}>
                <a className="mobileNav">+</a>
                <a className="webNav">BEERS</a>
              </li>
              <li className="menu__btn" onClick={this.whereBuy}>
                <a className="mobileNav">+</a>
                <a className="webNav">PROFILE</a>
              </li>
            </ul>
        </section>
      </>
     );
  };

}
 
export default Menu;