import React, { Component } from 'react';
import FormValidator from './FormValidator';
import PopUp from '../popUp/PopUp.js';

class Formulario extends Component {

  constructor (props) {
    super(props);

    this.validador = new FormValidator([
      {
      campo: 'nome',
      metodo: 'isEmpty',
      validoQuando: false,
      mensagem: 'Entre com o nome'
      },
      {
      campo: 'livro',
      metodo: 'isEmpty',
      validoQuando: false,
      mensagem: 'Entre com o livro'
      },
      {
      campo: 'preco',
      metodo: 'isInt',
      args: [{ min:0, max: 999 }],
      validoQuando: true,
      mensagem: 'Entre com o um valor numérico para o preço'
      }
    ]);

    this.stateInicial = {
      nome : '',
      livro : '',
      preco : '',
      validacao: this.validador.valido()
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

    const validacao = this.validador.valida(this.state);

    if (validacao.isValid) {
      this.props.escutadorDeSubmit(this.state);
      this.setState(this.stateInicial);
    } else {
      const { nome, livro, preco } = validacao;
      const campos =[ nome, livro, preco ];

      const camposInvalidos = campos.filter( elem => {
        return elem.isInvalid;
      });
      camposInvalidos.forEach( campo => {
        PopUp.exibeMensagem('error', campo.message);
      });
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