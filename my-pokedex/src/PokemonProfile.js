import React from 'react';
import pokemons from './data';
import Pokemons from './Pokemons';

class PokemonProfile extends React.Component {
  render() {
    return (
    <div>
      <h1>POKEMONS</h1>
      {pokemons.map((pokemon) => {
        return <Pokemons
          name={pokemon.name}
          type={pokemon.type}
          weight={pokemon.averageWeight.value}
          weightUnit={pokemon.averageWeight.measurementUnit}
          img={pokemon.image}
        />    
      })}
    </div>
    )
  }
}

export default PokemonProfile;

