import React, { Component } from 'react';
import './App.css';

// https://www.datamuse.com/api/ --- API FOR GETTING RANDOM WORDS

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import RandomBandNameContainer from './components/RandomBandNameContainer';

const cardStyle = {
  textAlign : 'center'
}

class App extends Component {
  render() {
    return (
      <div>
        <Card style={cardStyle}>
          <CardContent>
            <Typography variant="headline" component="h2">
              Random Band Name Generator
            </Typography>
            <Typography component="p">
              <span>Click the 'Generate' Button below to generate your random band name!</span><br/>
              <RandomBandNameContainer/>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;
