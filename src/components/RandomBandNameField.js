import React from "react";
import "./animate.css";

const fieldStyle = {
    marginTop: 80,
    fontSize: 60
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
