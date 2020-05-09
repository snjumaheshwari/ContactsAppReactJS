import React, { Component } from 'react';
import ListContacts from './ListContacts';
// import logo from './logo.svg';
// import './App.css';

const contacts = [
  {
    "id": "karen",
    "name": "Karen Isgrigg",
    "handle": "karen_isgrigg",
    "avatarURL": "http://localhost:5001/karen.jpg"
  },
  {
    "id": "richard",
    "name": "Richard Kalehoff",
    "handle": "richardkalehoff",
    "avatarURL": "http://localhost:5001/richard.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "handle": "tylermcginnis",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
 ];

class App extends Component {
  render(){
  return (
    
    <div className="App">
      <ListContacts contacts = {contacts}/>
     </div>
  );
}
}

export default App;
