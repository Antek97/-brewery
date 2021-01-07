import React from 'react';
import AgeConfirmation from './ageConfirmation';

class MenuHeader extends React.Component {
  state = {  }
  render() { 
    return (
      <> 
        
        <div>
          <div>Hello123</div>
          <p>Bedzie komponent</p>
          <p>Bedzie komponent</p>
          <p>Bedzie komponent</p>
          <p>Bedzie komponent</p>
        </div>
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