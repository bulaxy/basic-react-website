import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Calcaulator from './Calculator'
import Images from './Images'
import Grid from '@material-ui/core/Grid';
import Hover from './Hover'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rotateEverything: null
    }
  }
  toggleRotateClass = () => {
    if(this.state.rotateEverything === null){
      this.setState({rotateEverything:'rotate'})
    }else{
      this.setState({rotateEverything:null})
    }
  }
  render() {
    return (
      <div className={this.state.rotateEverything}>
        <Header />
        <div className="content">
          
        <Hover />
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            
            <Grid item xs={6}>
              <Calcaulator />
            </Grid>
            <Grid item xs={6}>
              <Images toggle={this.toggleRotateClass}/>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}
export default App;
