import React from 'react';

class Pokemon extends React.Component {
  render () {
    const { name, type, weight, weightUnit, img } = this.props;
    
  return (
    <div className='pokemon-show'>
      Nome: {name}<br></br> 
      Tipo: {type}<br></br> 
      Peso: {weight}{weightUnit}<br></br>
      <img src={img} alt='FOTO'></img>
      <hr></hr>
    </div>)
  }
}

export default Pokemon;