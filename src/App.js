import React, { Component } from 'react';
import './App.css';

import InforInput from './InforInput/InforInput';
import InforOutput from './InforOutput/InforOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    info: 'any'
  }
  
  newInforChangedHandler = (event) => {
    this.setState({ info: event.target.value});
  }
  
  render() {
    return (
      <div className="App">
        <h1>Input Validation</h1>
        <InforInput 
          changed={this.newInforChangedHandler}
          currentInfor={this.state.infor}/>
        <InforOutput infor={this.state.infor} />
        <Validation infor={this.state.infor} />
        <Char />
      </div>
    );
  }
}

export default App;
