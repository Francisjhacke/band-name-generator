import React, { Component } from 'react';

import GenerateButton from './GenerateButton';
import {GenerateBandName} from '../helpers.js';
import RandomBandNameField from './RandomBandNameField';
import './mainStyles.css';

class RandomBandNameContainer extends Component{
    constructor() {
        super();
        this.state = {
            bandName: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            bandName: GenerateBandName()
        });
    }
    render() {
      return (
          <div className="generateContainer">
            <GenerateButton handleClick={this.handleClick}/>
            <RandomBandNameField bandName={this.state.bandName}/>
          </div>
      );
    }
}

export default RandomBandNameContainer;