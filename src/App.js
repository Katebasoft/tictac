import React from 'react';
import './App.css';
import Game from './Game.js' 

class App extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render(){
      return (
      <div>
          <Game />
      </div>
      );
    }
}

export default App;
