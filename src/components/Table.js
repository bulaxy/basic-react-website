import React, { Component } from 'react';
const rows = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
    ]
class Table extends Component {
    render(){
        var trs = []
        for (let i = 0; i < rows.length; i++) {
            var tds = []
            for (let j = 0; j < rows[i].length; j++) {
                tds.push(<td>{rows[i][j]}</td>)
            }
            trs.push(<tr>{tds}</tr>)
        }
        return (
            <table>
                <tbody>
                    {trs}
                </tbody>
            </table>
        )
    }
}
export default Table;
