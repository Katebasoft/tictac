import React from 'react';
import Box from './Box.js';


class Board extends React.Component {
    constructor(props)
    {
        super(props);
    }
    renderBox(i){
        return (
            <Box value={this.props.boxes[i]} onClick={()=>this.props.onClick(i)} 
            />
        );
    }
    render(){
        return(
            <div>

                <div>
                    {this.renderBox(0)}
                    {this.renderBox(1)}
                    {this.renderBox(2)}
                </div>

                <div>
                    {this.renderBox(3)}
                    {this.renderBox(4)}
                    {this.renderBox(5)}
                </div>

                <div>
                    {this.renderBox(6)}
                    {this.renderBox(7)}
                    {this.renderBox(8)}
                </div>
            </div>
        );
    }
}



export default Board;