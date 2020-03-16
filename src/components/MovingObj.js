import React, { Component } from 'react';

class MovingObj extends Component {
    constructor(props) {
        super(props)

        this.state = {
            left:Math.random()*500,
            top:Math.random()*500,
            padding:Math.random()*50,
        }
    }
    componentDidMount(){
        this.interval = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }
    tick() {
        var obj = {
            left:Math.random()*500,
            top:Math.random()*500,
            padding:Math.random()*50,
        }
        this.setState(obj)
    }
    render() {
        var left = this.state.left + 'px';
        var top =  this.state.top + 'px';
        var padding =  this.state.padding + 'px';
        return (
            <img src="http://pngimg.com/uploads/birds/birds_PNG108.png" style={{ height: "100px", padding, left, top, position: 'absolute' }} />
        )
    }
}
export default MovingObj