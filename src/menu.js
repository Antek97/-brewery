import React from 'react';
import './css/style.css'


class MainPage extends React.Component {
  state = {  }
  render() { 
    return ( <div>22</div> );
  }
}

class WhereBuy extends React.Component {
  state = {  }
  render() { 
    return ( <div>2</div> );
  }
}
 
class Beers extends React.Component {
  state = {  }
  render() { 
    return (
      <div>
      <section>
        <form>
          <h1></h1>
          <div><p>🔍</p><input type='text' placeholder="Search"></input></div>
        </form>
      </section>
      <ul></ul>
      <div></div>
      <button className="addbeer" onClick="">+</button>
      </div>
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
        Layer : WhereBuy
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