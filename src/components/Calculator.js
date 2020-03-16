import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num1: "",
      num2: "",
      num3: "",
    }
  }

  handleChange = e => {
    let obj = {};
    obj[e.target.id] = e.target.value
    console.log(obj)
    this.setState(obj);
  }

  render() {
    var finalValue = 0
    var num1 = this.state.num1
    var num2 = this.state.num2
    var num3 = this.state.num3
    finalValue = (num1) ? finalValue + parseFloat(num1) : finalValue
    finalValue = (num2) ? finalValue + parseFloat(num2) : finalValue
    finalValue = (num3) ? finalValue + parseFloat(num3) : finalValue
    return (
      <div>
        <input
          id="num1"
          onChange={this.handleChange}
          value={this.state.num1}
        />
        +
        <input
          id="num2"
          onChange={this.handleChange}
          value={this.state.num2}
        />
        +
        <input
          id="num3"
          onChange={this.handleChange}
          value={this.state.num3}
        />
        =
        <input
          value={finalValue}
          disabled
        />
      </div>
    )
  }
}
export default Calculator;
