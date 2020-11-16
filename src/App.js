import React from 'react';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
  }
  static getDerivedStateFromProps(props, state) {
    return { favColor: props.color };
  }
  changeColor = () => {
    this.setState({ color: 'aqua' });
    console.log(this.state);
    console.log(this.props);
  };
  myChangeHandler = (event) => {
    this.setState({ color: event.target.value });
  };
  render() {
    //this.props.color = 'black';
    return (
      <p>
        Hi, I am a car in <b>{this.state.color}</b> and the prop color is <b>{this.props.color}</b>
        <br />
        <input type='text' value={this.state.color} onChange={this.myChangeHandler} />
        <button type='button' onClick={this.changeColor}>
          Change Color
        </button>
        <select value={this.state.color} onChange={this.myChangeHandler}>
          <option value='red'>red</option>
          <option value='yellow'>yellow</option>
          <option value='white'>white</option>
          <option value='aqua'>aqua</option>
        </select>
      </p>
    );
  }
}

class Garage extends React.Component {
  render() {
    const color = 'purple';
    return (
      <div>
        <h1>Who ** lives in my Garage f</h1>
        <Car color={color} />
      </div>
    );
  }
}

export default Garage;
