import React, { Component } from 'react';
import Tabela from '../components/tabela/Tabela.js';
import Formulario from '../components/formulario/Formulario.js';
import PopUp from '../components/popUp/PopUp.js';
import ApiService from '../services/ApiService.js';

export default class  Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      autores: [],
    };
  }


  removeAutor = id => {
    const { autores } = this.state;

    const autoresAtualizado = autores.filter (autor => {
      return autor.id !== id;
    });

    ApiService.RemoveAutor(id)
              .then(res => {
                 if (res.message === 'deleted') {
                   this.setState({ autores: [...autoresAtualizado] });
                   PopUp.exibeMensagem("success", "Item removido com sucesso");
                 }
              })
              .catch(err => PopUp.exibeMensagem("error", "Erro na API ao tentar remover item"))
  }


  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
              .then(res => {
                if (res.message === 'success') {
                  this.setState({ autores : [...this.state.autores, res.data] });
                  PopUp.exibeMensagem("success", "Item adicionado com sucesso");
                }
              })
              .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar criar o item"));
  }
  


  componentDidMount() {
    ApiService.ListaAutores()
              .then (res => {
                if ( res.message === 'success') {
                  this.setState({ autores: [...this.state.autores, ...res.data] })
                }
              })
              .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar listar"))
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
