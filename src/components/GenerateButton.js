import React from 'react';
import Button from '@material-ui/core/Button';

const GenerateButton = props => 
    <Button onClick={props.handleClick} variant="contained" color="primary">
        Generate
    </Button>

export default GenerateButton;
