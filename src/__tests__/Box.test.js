import React from 'react';
import App from '../App';
import Box from '../Box.js';
import {shallow} from 'enzyme';

const props = {
  value: "",
  onClick: ()=>{}
}

const BoxTest = (
  <button onClick={props.onClick}>{props.value}</button>
)


describe('Box Tests', ()=>{
    it('Box rendering', ()=>{
      const box = shallow(<Box {...props} />);
      //Checks if button is present on Box Component
      //expect(box.contains(<button/>)).toEqual(true);
      //Check the whole structure of Box Component
      expect(box.equals(BoxTest)).toEqual(true);
    });
  
    
  
  });