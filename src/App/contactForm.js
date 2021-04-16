import React from 'react';

class Contact extends React.Component {
  state = { 
    name:'',
    email:'',
    message:'',
    
 }

 nameValue =(e)=> {
  this.setState({
    name: e.target.value
  })
}

emailValue =(e)=> {
  this.setState({
    email: e.target.value
  })
}

mesegeValue =(e)=> {
  this.setState({
    message: e.target.value
  })
}

  render() { 
    return ( 
      <div>
        <input type='text' placeholder="Name" onChange={this.nameValue}></input>
        <input type='text' placeholder="Email" onChange={this.emailValue}></input>
        <input type='text' placeholder="Message" onChange={this.mesegeValue}></input>
      </div> 
    );
  }
}

export default Contact;