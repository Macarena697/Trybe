import React from 'react';
import './App.css';
import { addAge, addText, addCheck } from './redux/actions'
import { connect } from 'react-redux'

class App extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state= {
      idade: 0,
      vaiVir: "true",
      estadoFavorito: '',
    }
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addText, addCheck, addAge } = this.props;
    const { estadoFavorito, idade, vaiVir } = this.state
    addText(estadoFavorito)
    addCheck(vaiVir);
    addAge(idade)
  }

  render() {
    return (
      <div>
        <h1>FORMULARIO</h1>
        <form className="form">
          <select>
            <option>OPCION 1</option>
            <option>OPCION 2</option>
          </select>

          <label> IDADE: 
            <input type="number" name="idade" value={this.state.idade} 
              onChange={this.handleChange} />
          </label>

          <label> VAI VIR?
            <input type="checkbox" name="vaiVir" value={this.state.vaiVir} 
              onChange={this.handleChange} />
          </label>

          <label>
            <textarea 
              name="estadoFavorito" 
              value={this.state.estadoFavorito} 
              onChange={this.handleChange}>
            </textarea>
          </label>
          <button onClick={this.handleSubmit}>ENVIAR</button>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addAge, addCheck, addText }

export default connect (null, mapDispatchToProps) (App)
