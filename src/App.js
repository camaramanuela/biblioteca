import React, { Component } from 'react';
import Tabela from './Tabela.js'


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

  }
 
  render() {
    return (
      <div className="App">
        <Tabela autores = { this.state.autores } />
      </div>
    );  
  }
  
}

export default App;
