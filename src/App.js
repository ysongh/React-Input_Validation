import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    infor: ''
  }
  
  newInforChangedHandler = (event) => {
    this.setState({ infor: event.target.value});
  }
  
  deleteCharHandler = (index) => {
    const text = this.state.infor.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({infor: updatedText});
  }
  
  render() {
    // map give a new arrary
    // using index on map is not good
    const charList = this.state.infor.split('').map((ch, index) => {
      // passing ch to Char component
      // this clicked is not excute this at the start of the react
      return <Char 
        character={ch} 
        key={index} 
        clicked={() => this.deleteCharHandler(index)}/>;
    });
    return (
      <div className="App">
        <h1>Input Validation</h1>
        <input 
          type="text" 
          onChange={this.newInforChangedHandler} 
          value={this.state.infor}/>
        <p>{this.state.infor}</p>
        <Validation inforLength={this.state.infor.length} />
        {charList}
      </div>
    );
  }
}

export default App;
