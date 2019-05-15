import React from 'react';
import Board from '../Board.js';
import Box from '../Box.js';
import {shallow} from 'enzyme';

const props = {
    renderBox: (i)=>{
       return <Box value={i} onClick={()=>this.props.onClick(i)} 
            />
    }
}

const BoardTest = (
    <div>
        <div>
        {props.renderBox(0)}
        {props.renderBox(1)}
        {props.renderBox(2)}
        </div>

        <div>
        {props.renderBox(3)}
        {props.renderBox(4)}
        {props.renderBox(5)}
        </div>

        <div>
        {props.renderBox(6)}
        {props.renderBox(7)}
        {props.renderBox(8)}
        </div>

    </div>
)

describe('Board Tests', ()=>{
    it('Board rendering', ()=>{
        const board = shallow(<Board {...props}/>);
        expect(board.equals(BoardTest)).toEqual(true);
    });
  
  });