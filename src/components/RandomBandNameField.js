import React from "react";
import "./animate.css";

const fieldStyle = {
    marginTop: 80,
    fontSize: 60,
	textShadow: "0 1px 0 #ccc, 0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);"
}

class RandomBandNameField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.animate = false;
  }

  componentWillReceiveProps() {
    this.setState({ animate: true });
    setTimeout(
      function() {
        this.setState({ animate: false });
      }.bind(this),
      1000
    );
  }

  render() {
    const animate = this.state.animate;
    return (
      <h1 style={fieldStyle} className={animate ? "animated flipInY" : ""}>
        {this.props.bandName.replace(/^\w/, c => c.toUpperCase())}
      </h1>
    );
  }
}

export default RandomBandNameField;
