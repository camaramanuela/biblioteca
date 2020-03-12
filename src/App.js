import React, { Component, Fragment } from 'react';

import Tabela from './Tabela.js';
import Formulario from './Formulario.js';

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

    this.setState (
      {
        autores : autores.filter((autor, posAtual) => {
          
          return posAtual !== index;
        }),
      }
    )
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores : [...this.state.autores, autor] })
  }
 
  render() {
    return (
      <Fragment >
        <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor } />
        <Formulario escutadorDeSubmit = { this.escutadorDeSubmit } />
      </Fragment>
    );  
  }
  
}

export default App;
