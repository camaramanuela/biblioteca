import React, { Component } from 'react';
import DataTable from '../components/tabela/DataTable';
import ApiService from '../services/ApiService';
import PopUp from '../components/popUp/PopUp';

class Livros extends Component {
  constructor(props) {
    super(props);

    this.state = {
      livros: [],
      titulo: 'Livros'
    };
  }

  componentDidMount() {
    ApiService.ListaAutores()
              .then (res => {
                if( res.message === 'success') {
                  this.setState({ livros: [...this.state.livros, ...res.data] })
                }
              })
              .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar listar os livros"));
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