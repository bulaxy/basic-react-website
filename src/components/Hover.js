import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class Hover extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Tooltip title="Delete">
                    <button onClick={this.onRotateEverythingHandler}>Hover Here</button>
                </Tooltip>
            </div>
        )
    }
}
export default Hover;
