import React, { Component } from 'react';
import Tabela from './Tabela.js';
import Formulario from './Formulario.js';
import PopUp from './PopUp.js';

export default class  Main extends Component {

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
    PopUp.exibeMensagem("success", "Item removido com sucesso");
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores : [...this.state.autores, autor] });
    PopUp.exibeMensagem("success", "Item adicionado com sucesso");
  }

  render () {
    return (
      <div className="container mt-10">
        <h1>Livraria</h1>
          <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor } />
          <Formulario escutadorDeSubmit = { this.escutadorDeSubmit } />
      </div>
    );
  };
  
}
