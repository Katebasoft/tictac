import React from 'react';
import App from '../App';
import Game from '../Game.js';
import {shallow} from 'enzyme';


describe('App Tests', ()=>{
  it('Game rendering', ()=>{
    const app = shallow(<App />);
    expect(app.contains(<Game/>)).toEqual(true);
  });


});