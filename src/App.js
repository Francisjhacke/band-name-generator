import React, { Component } from 'react';
import './App.css';

// https://www.datamuse.com/api/ --- API FOR GETTING RANDOM WORDS

import GenerateButton from './components/GenerateButton';
import AppHeader from './components/AppHeader';

import {GenerateBandName} from './helpers.js';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader/>
        <p className="App-intro">
          To get started, click the <strong>Generate</strong> button.<br/>
          <GenerateButton/>
          <span>{GenerateBandName()}</span>
        </p>
      </div>     
    );
  }
}

export default App;
