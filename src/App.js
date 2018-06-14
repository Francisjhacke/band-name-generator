import React, { Component } from 'react';
import './App.css';

import { Container } from 'semantic-ui-react'
import GenerateButton from './components/GenerateButton';
import AppHeader from './components/AppHeader';

import {GenerateBandName} from './helpers.js';

class App extends Component {
  render() {
    return (
      <Container>
        <AppHeader/>
        <p className="App-intro">
          To get started, click the <strong>Generate</strong> button.<br/>
          <GenerateButton/>
          <span>{GenerateBandName()}</span>
        </p>
      </Container>
    );
  }
}

export default App;
