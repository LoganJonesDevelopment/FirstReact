import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { whileStatement } from '@babel/types';
import Table from './Table';

const green = '#39D1B4';
const yellow = '#FFD712';
const white = '#111111';



class App extends React.Component {
	
  constructor(props) {
  super(props);

  this.state = {color: green}
    this.changeColor = this.changeColor.bind(this);
}
changeColor() {
  const newColor = this.state.color === green ? yellow : green;
  this.setState({color: newColor});
}

  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
    return (
    <div>
    <h1>
       Wow this app is my first React App!
    </h1>
      <div style={{background: this.state.color}}>
      <h1>
        Change my color
      </h1>
      <button onClick={this.changeColor}>
        Change color
      </button>
    </div>
    <Table characterData={characters} />
    </div>
    );
    
  }
}


 export default App;
