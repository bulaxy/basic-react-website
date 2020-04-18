import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, clearItems } from '../actions';

class ReduxItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: "",
            name: ""
        }
    }
    inputHandler1 = e => {
        this.setState({ name: e.target.value })
    }
    inputHandler2 = e => {
        this.setState({ item: e.target.value })
    }
    onPressHandler = () => {
        this.props.addItem(this.state.name, this.state.item)
    }
    render() {
        return (
            <div>
                <div>
                    Name:<input onChange={this.inputHandler1} value={this.state.name} />
                Item:<input onChange={this.inputHandler2} value={this.state.item} />
                    <button onClick={this.onPressHandler}>Add</button>
                    <button onClick={() => this.props.clearItems()}>Clear </button>
                </div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Item</th>
                    </tr>
                    {this.props.itemList.map((row) =>
                        <tr>
                            <td>{row.name}</td>
                            <td>{row.item}</td>
                        </tr>
                    )}
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        itemList: state.list.list
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addItem,
            clearItems
        },
        dispatch
    );
}


export default connect(mapStateToProps, matchDispatchToProps)(ReduxItems);