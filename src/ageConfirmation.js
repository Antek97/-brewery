import React from 'react';
import './ageConfirmation.css';
import './menu';


class AgeConfirmation extends React.Component {
  state = { 
    confirm:null,
   }
    onClick = () => {
      this.setState({
        confirm : true
      })
      console.log('sess')
    }
    handleGmRegister = (confirm) =>
    {
      this.setState({
        confirm: confirm
      });
      this.props.onGMRegistered(confirm)
      }
  render() { 
    
    return (
    
      <div className='bacground'>
        <div className='mainMenu'>
          <div className='logo'></div>
          <h1>Czy masz ukończone 18 lat?</h1>
          <br/>
          <div>
            <button onClick={this.handleClickInput}>Tak</button>
            <button>Nie</button>
          </div>
          {/* <input type="checkbox" id="horns" name="horns"></input><p>Zapamiętaj mnie</p> */}
        </div>
      </div>
     
      );
  }
}
 
export default AgeConfirmation;