import React, { Component } from 'react';
import DataTable from './DataTable';
import ApiService from './ApiService';

class Livros extends Component {
  constructor(props) {
    super(props);

    this.state = {
      livros: [],
      titulo: 'Livros'
    };
  }

  componentDidMount() {
    ApiService.ListaLivros()
      .then (res => {
        this.setState({ livros: [...this.state.livros, ...res.data] })
      });
  }

  render() {
    return (
      <div className='container'>
        <h1>Página de Livros</h1>
        <DataTable 
          dados={ this.state.livros } 
          titulo={ this.state.titulo } 
          colunas={ ['livro'] } />
      </div>
    );
  }
}

export default Livros;