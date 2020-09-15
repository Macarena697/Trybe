import React from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    //  A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.eVerde = this.eVerde.bind(this);

    this.state = {
      numeroDeClick: 0,
      numeroDeClick2: 0,
      numeroDeClick3: 0,
    }
  }

  handleClick = () => {
    console.log(this)
    console.log('CLICK1')
    this.setState((estadoAnterior, _props) => ({
      numeroDeClick: estadoAnterior.numeroDeClick + 1
    }))
  }
  
  handleClick2 = () => {
    console.log(this)
    console.log('CLICK1')
    this.setState((estadoAnterior, _props) => ({
      numeroDeClick2: estadoAnterior.numeroDeClick2 + 1
    }))
  }
  
  handleClick3 = (event) => {
    console.log(this)
    console.log('CLICK3')
    this.setState((estadoAnterior, _props) => ({
      numeroDeClick3: estadoAnterior.numeroDeClick3 + 1
    }))
    console.log(this)
    this.eVerde(event)
  }

  eVerde(event) {
    if (event.target.value % 2 === 0) {
      console.log('VERDE')
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.numeroDeClick}</button>
        <button onClick={this.handleClick2}>{this.state.numeroDeClick2}</button>
        <button onClick={this.handleClick3}>{this.state.numeroDeClick3}</button>
     </div> 
    )
  }
}

export default App;
