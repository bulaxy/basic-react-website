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

  numChangehandler = e => {
    this.setState({ num1: e.target.value })
  }

  numChangehandler2 = e => {
    this.setState({ num2: e.target.value })
  }

  numChangehandler3(e) {
    this.setState({ num3: e.target.value })
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
          onChange={this.numChangehandler}
          value={this.state.num1}
        />
        +
        <input
          onChange={value => {
            this.numChangehandler2(value)
          }
          }
          value={this.state.num2}
        />
        +
        <input
          onChange={value => {
            this.numChangehandler3(value)
          }
          }
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
