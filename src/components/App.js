import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Calcaulator from './Calculator'
import Images from './Images'
import Grid from '@material-ui/core/Grid';
import Hover from './Hover'
import Table from './Table'
import MovingObj from './MovingObj'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rotate: null
    }
  }
  toggleRotateClass = () => {
    if (this.state.rotateEverything === null) {
      this.setState({ rotateEverything: 'rotate' })
    } else {
      this.setState({ rotateEverything: null })
    }
  }
  render() {
    return (

      <Router>
        <div className={this.state.rotateEverything}>
          <Header />
          <Switch>
            <div className="content test">
              <Route path="/" />
              <Route path="/table" component={Table} />
              <Route path="/moving" component={MovingObj} />
              <Route path="/hovor" component={Hover} />
              <Route path="/add" component={Calcaulator} />
              <Route path="/rotate">
                <Images toggle={this.toggleRotateClass} />
              </Route>
            </div>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
