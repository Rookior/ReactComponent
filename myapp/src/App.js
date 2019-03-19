import React, { Component } from 'react';
import A from './components/A'
import B from './components/B'
import C from './components/C'
import F from './components/F'
import G from './components/G'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <A></A>
        <B name={'张三'} age={18}></B>
        <C></C>
        <F></F>
        <G></G>
      </div>
    );
  }
}

export default App;
