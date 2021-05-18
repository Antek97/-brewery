import React from 'react';

class Contact extends React.Component {
  state = { 
    name:'',
    email:'',
    message:'',
    
 }

nameValue =( e )=> {
  this.setState({
    name: e.target.value
  })
}

emailValue =( e )=> {
  this.setState({
    email: e.target.value
  })
}

mesegeValue =( e )=> {
  this.setState({
    message: e.target.value
  })
}

  render() { 
    return ( 
      <div className="messageConteiner">
        <input className="messageConteiner__name" type='text' placeholder="Name" onChange={this.nameValue}></input>
        <input className="messageConteiner__email" type='text' placeholder="Email" onChange={this.emailValue}></input>
        <input className="messageConteiner__message" type='text' placeholder="Message" onChange={this.mesegeValue}></input>
        <button className="messageConteiner__send">Wyślij</button>
      </div> 
    );
  }
}

export default Contact;