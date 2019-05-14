import React from 'react';
import App from '../App';
import Box from '../Box.js';
import {shallow} from 'enzyme';


describe('Box Tests', ()=>{
//Checks if button is present on Box Component
    it('Box rendering', ()=>{
      const box = shallow(<Box/>);
      expect(box.contains(<button/>)).toEqual(true);
    });
  
  
  });