import React from 'react';
import './App.css';
import { addForm } from './redux/actions'
import { connect } from 'react-redux'

class App extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const { addForm } = this.props;
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
          <button onClick={() => addForm(this.state.estadoFavorito)}>ENVIAR</button>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addForm: (e) => dispatch(addForm(e))
});

export default connect (null, mapDispatchToProps) (App)
