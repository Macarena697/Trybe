import React from 'react';
import './App.css';
import PokemonProfile from './PokemonProfile';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PokemonProfile />
      </div>
    ) 
  }
}

export default App;