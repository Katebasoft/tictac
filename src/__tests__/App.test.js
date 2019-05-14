import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Game from '../Game.js';
import {shallow} from 'enzyme';

/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

describe('App Tests', ()=>{
  it('Game rendering', ()=>{
    const app = shallow(<App />);
    expect(app.contains(<Game/>)).toEqual(true);
  });
});