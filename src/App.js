import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Persons extends Component{
  render(){
    const persons = this.props.persons;
    const e4= <ol>
      {persons.map (people => ( <li> {people.name} </li> )) }
      </ol>
      return e4;
  }
}
class App extends Component {
  render(){
  return (
    <div className="App">
      <Persons   persons = {[
      { 'name' : 'rohan'},
      { 'name' : 'rohjjasans'}] }
      />
      <Persons   persons = {[
      { 'name' : 'rohsssan'},
      { 'name' : 'rohjjasans'}] }
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloadjssk.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"

        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
