import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-text">
                    Hello World
                </div>
                <div>
                    <Link to="/">Home</Link><span>   </span>
                    <Link to="/table">Table</Link><span>   </span>
                    <Link to="/add">Adding 3 numbers</Link><span>   </span>
                    <Link to="/hovor">Hovor Text</Link><span>   </span>
                    <Link to="/rotate">Rotates</Link><span>   </span>
                    <Link to="/moving">Moving Obj</Link><span>   </span>
                    <Link to="/redux">Redux Items</Link><span>   </span>
                </div>
            </header>
        )
    }
}
export default Header