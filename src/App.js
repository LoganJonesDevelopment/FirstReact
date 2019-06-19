import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	// constructor method begins here:
constructor(props) {
  super(props);
  this.state = { title: 'first React application!'}
}
	
  render() {
    return (
      <h1>
        Wow this app is my {this.state.title}
      </h1>
    );
  }
}
//

export default App;
