import React, { Component } from 'react';
import FormValidator from './FormValidator';

class Formulario extends Component {

  constructor (props) {
    super(props);

    this.validador = new FormValidator({
      campo: 'nome',
      metodo: 'isEmpty'
    });

    this.stateInicial = {
      nome : '',
      livro : '',
      preco : '',
    }

    this.state = this.stateInicial;
  }

  escutadorDeInput = event => {
    const { name, value } = event.target;

    this.setState ({
      [name] : value
    });
  }

  submitFormulario = () => {

    if (this.validador.valida(this.state)) {
      this.props.escutadorDeSubmit(this.state);
      this.setState(this.stateInicial);
    } else {
      console.log ('Submit bloqueado');
    }
    
  }
  

  render() {

    const { nome, livro, preco } = this.state;

    return (

      <div className="row ">
        <form className="col s12">
          <div className="row">

            <div className="col s4">
              <input 
                id ="nome"
                type = "text"
                name = "nome" 
                className="validate"
                value = { nome } 
                onChange = { this.escutadorDeInput } />
              <label htmlFor="nome">Nome</label>
            </div>

            <div className="col s4">
              <input 
                id ="livro"
                type = "text"
                name = "livro" 
                className="validate"
                value = { livro } 
                onChange = { this.escutadorDeInput }/>
              <label htmlFor="nome">Livro</label>
            </div>

            <div className="col s4">
              <input 
                id ="preco"
                type = "text"
                name = "preco" 
                className="validate" 
                value = { preco } 
                onChange = { this.escutadorDeInput }/>
              <label htmlFor="preco">Preço</label>
            </div>

            <div className="input-field col s12">
              <button 
                onClick={ this.submitFormulario } 
                type="button"
                className="waves-effect waves-light btn">
                  Salvar
              </button>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default Formulario;