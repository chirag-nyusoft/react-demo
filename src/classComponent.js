import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red", type: "car" };
  }

  changeColor = () => {
    this.setState({ color: "sky" });
  };

  render() {
    return (
      <div>
        <h1> I have a {this.state.color} </h1> <p> {this.state.type} </p>
        <p> it is {this.props.brand} Brand.. </p>
        <button type="button" onClick={this.changeColor}> Update Color </button>
      </div>
    );
  }
}

export default Car;
