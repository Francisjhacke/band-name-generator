import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
        width: 400,
        height: 115,
        fontSize: 50
    },
};

const GenerateButton = props => 
    <Button className={props.classes.button} onClick={props.handleClick} variant="contained" color="primary">
        Generate
    </Button>

export default withStyles(styles)(GenerateButton);
