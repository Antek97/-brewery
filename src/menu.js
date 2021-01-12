import React from 'react';
import AgeConfirmation from './ageConfirmation';
import './ageConfirmation.css';
import TestImg from'./img.jpg';

class BanerMainPage extends React.Component {
  state = { 
   }
   
  render() { 
    return ( 
      <div className='containerBaner'>
        <div className='box'>
            <div className='imgBox'><img src={TestImg} alt="TestImg"/></div>
        </div>
        <div className='box'>
            <div className='imgBox'><img src={TestImg} alt="TestImg"/></div>
        </div>
        <div className='box'>
            <div className='imgBox'><img src={TestImg} alt="TestImg"/></div>
        </div>
        <div className='box'>
            <div className='imgBox'><img src={TestImg} alt="TestImg"/></div>
        </div>
      </div> 
);
  }
}
 
class MainPage extends React.Component {
  state = {  }
  render() { 
    return (
    <>
      <section className="mainPage">
        <BanerMainPage/>
      </section>
      {/* <footer></footer> */}
      
      </>
     );
  }
}

class Beers extends React.Component {
  state = {  }
  render() { 
    return (
      <section className="beersPage">
        <div></div>
        <h1>Witaj!</h1>
      </section>
      );
  }
}

class WhereBuy extends React.Component {
  state = {  }
  render() { 
    return (
      <section className="whereBuyPage">
        <div></div>
        <h1>Witaj!</h1>
      </section>
      );
  }
}

class MyInfo extends React.Component {
  state = {  }
  render() { 
    return (
      <section className="mainPage">
        <div></div>
        <h1>Witaj!</h1>
      </section>
      );
  }
}

class Contact extends React.Component {
  state = {  }
  render() { 
    return (
      <section className="contactPage">
        <div></div>
        <h1>Witaj!</h1>
      </section>
      );
  }
}

class MenuHeader extends React.Component {
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
        Layer : WhereBuy
    })
    
  }
  myInfo = () =>{
    this.setState({
        Layer : MyInfo
    })
    
  }
  contact = () =>{
    this.setState({
        Layer : Contact
    })
  }


  render() { 
    return (
      <> 
        <section className="menuMainPage">
          <header>
          <a><img src={TestImg} alt="TestImg"/></a>

            <ul>
              <li onClick={this.mainPage}><a>Strona główna</a></li>
              <li onClick={this.handleklickBeers}><a>Nasze piwa</a></li>
              <li onClick={this.whereBuy}><a>Gdzie kupisz</a></li>
              <li onClick={this.myInfo}><a>O nas</a></li>
              <li onClick={this.contact}><a>Kontakt</a></li>
            </ul>

          </header>
        </section>
        {React.createElement(this.state.Layer)}

      </>
     );
  }
}
 
class Menu extends React.Component {
  state = { 
      confirm:true,
   } 
   onChange = (confirm)=> {
    this.setState({
      confirm: confirm
    });
  }
  render() { 
    return ( 
      <>
        {this.state.confirm === null ? <AgeConfirmation onChange={this.state.confirm}/> : <MenuHeader/> }
      </>
     );
  }
}
 
export default Menu;