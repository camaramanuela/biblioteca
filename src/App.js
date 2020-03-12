import React from 'react';
import Tabela from './tabela.js'







function App() {

  const  autores =  [
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
  ];

  return (
    <div className="App">
      <Tabela autores = { autores } />
    </div>
  );

  
  return (
    <div className="App">
      <Tabela />
    </div>
  );
}

export default App;
