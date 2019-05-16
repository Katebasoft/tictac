import React from 'react';
import Board from './Board';

class Game extends React.Component 
{
    constructor(props){
        super(props);
        this.state = {
            pastMoves: [
                {
                    boxes: Array(9).fill(null)
                }
            ],
            round: 0,
            nextPlayerX: true 
        }
    }

    onClick = (I) => {

    }
    render()
    {
        return(
            <div>
                <Board 
                    boxes = {this.state.pastMoves[this.state.round]}
                    onClick = {this.onClick}
                />
            </div>
        );
    }
}

export default Game;