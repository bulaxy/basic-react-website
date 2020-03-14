import React, { Component } from 'react';
import './Images.css';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rotating: null,
      show1:true,
      show2:false
    }
  }
  onRotateHandler = () => {
    if (this.state.rotateClass === null) {
      this.setState({ rotateClass: 'rotate' })
    } else {
      this.setState({ rotateClass: null })
    }
  }
  onRotateEverythingHandler = () => {
    this.props.toggle()
  }
  changeImage = () => {
    if(this.state.show1){
      this.setState({
        show1:false,
        show2:true
      })
    }else{
      this.setState({
        show1:true,
        show2:false
      })
    }
  }
  render() {
    return (
      <div className="images-container">
        {(this.state.show1) ?
          <img className={this.state.rotateClass} width="150" height="150" src={"https://via.placeholder.com/150.svg?text=1"} />
          :
          null
        }
        {(this.state.show2) ?
          <img className={this.state.rotateClass} width="150" height="150" src={"https://via.placeholder.com/150.svg?text=2"} />
          :
          null
        }
        <button onClick={this.onRotateHandler}>rotate Image</button>
        <button onClick={this.changeImage}>change Image</button>
        <button onClick={this.onRotateEverythingHandler}>rotate EVERYTHING</button>
      </div>
    )
  }
}
export default Calculator;
