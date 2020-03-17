import React, { Component, Fragment } from 'react';


import 'materialize-css/dist/css/materialize.min.css';
import './styles.css';

import Header from './Header.js';
import Tabela from './Tabela.js';
import Formulario from './Formulario.js';
import PopUp from './PopUp.js'

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Shakespeare',
        livro: 'Romeu e Julieta',
        preco: '35'
      },
      {
        nome: 'Machado de Assis',
        livro: 'Dom Casmurro',
        preco: '20'
      },
      {
        nome: 'Kafka',
        livro: 'A metamorfose',
        preco: '25'
      },
      {
        nome: 'Camus',
        livro: 'O estrangeiro',
        preco: '30'
      }
    ],

  };

  removeAutor = index => {

    const { autores } = this.state;

    this.setState ({
        autores : autores.filter((autor, posAtual) => {
          
        return posAtual !== index;
      }),
    });
    PopUp.exibeMensagem("error", "Item removido com sucesso");
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores : [...this.state.autores, autor] });
    PopUp.exibeMensagem("success", "Item adicionado com sucesso");
  }
 
  render() {
    return (
      <Fragment >
        <Header />
        <div className="container mt-10">
          <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor } />
          <Formulario escutadorDeSubmit = { this.escutadorDeSubmit } />
        </div>
      </Fragment>
    );  
  }
  
}

export default App;
