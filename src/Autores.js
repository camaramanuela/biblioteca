import React, { Component } from 'react';
import DataTable from './DataTable';
import ApiService from './ApiService'

class Autores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomes: [],
      titulo: 'Autores'
    };
  }


  componentDidMount() {
    ApiService.ListaAutores()
      .then (res => {
        this.setState({ nomes: [...this.state.nomes, ...res.data] })
      });
  }


  render() {
    return (
      <div className='container'>
        <h1>Página de Autores</h1>
        <DataTable
          dados={this.state.nomes}
          titulo={this.state.titulo}
          colunas={['nome']} />
      </div>
    );
  }
}

export default Autores;