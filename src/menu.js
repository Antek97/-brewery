import React from 'react';
import AgeConfirmation from './ageConfirmation';

class BeerList extends React.Component {
  state = {  }
  render() { 
    return (
      <div>Hello</div>
      );
  }
}

class MenuHeader extends React.Component {
  state = { 
    Layer : ""
   }


  handleklickBeers = () =>{
    this.setState({
        Layer : "myBeer"
    })
    console.log(this.state.Layer)
  }
  whereBuy = () =>{
    this.setState({
        Layer : "whereBuy"
    })
    
  }
  myInfo = () =>{
    this.setState({
        Layer : "myInfo"
    })
    
  }
  contact = () =>{
    this.setState({
        Layer : "contact"
    })
    
  }

  render() { 
    return (
      <> 
        <div>
          <div>Hello123</div>
          <ul>
          <li>Strona główna</li>
          <li onClick={this.handleklickBeers}>Nasze piwa</li>
          <li onClick={this.whereBuy}>Gdzie kupisz</li>
          <li onClick={this.myInfo}>O nas</li>
          <li onClick={this.contact}>Kontakt</li>
          </ul>
        </div>
        <button onClick={() => console.log(this.state.Layer)}>test</button>
        <BeerList/>
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