import React from 'react';
import AgeConfirmation from './ageConfirmation';
import './ageConfirmation.css';

class MainPage extends React.Component {
  state = {  }
  render() { 
    return ( 
     <div>pierwsza strona</div>
     );
  }
}

class Beers extends React.Component {
  state = {  }
  render() { 
    return (
      <div>lista piw</div>
      );
  }
}

class WhereBuy extends React.Component {
  state = {  }
  render() { 
    return (
      <div>gdzie kupic</div>
      );
  }
}

class MyInfo extends React.Component {
  state = {  }
  render() { 
    return (
      <div>o nas</div>
      );
  }
}

class Contact extends React.Component {
  state = {  }
  render() { 
    return (
      <div>kontakt</div>
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
        <div className='header'>
          {/* <div>Hello123</div> */}

          <ul>
            <li onClick={this.mainPage}>Strona główna</li>
            <li onClick={this.handleklickBeers}>Nasze piwa</li>
            <li onClick={this.whereBuy}>Gdzie kupisz</li>
            <li onClick={this.myInfo}>O nas</li>
            <li onClick={this.contact}>Kontakt</li>
          </ul>

        </div>
        {React.createElement(this.state.Layer)}

      </>
     );
  }
}
 
class Menu  extends React.Component {
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