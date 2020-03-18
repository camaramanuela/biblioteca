import React, { Component } from 'react';
import Tabela from './Tabela.js';
import Formulario from './Formulario.js';
import PopUp from './PopUp.js';
import ApiService from './ApiService.js';

export default class  Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      autores: [],
    };
  }


  removeAutor = id => {

    const { autores } = this.state;

    this.setState ({
        autores : autores.filter((autor) => {
          
        return autor.id !== id;
      }),
    });
    PopUp.exibeMensagem("success", "Item removido com sucesso");
    ApiService.RemoveAutor(id);
  }

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
              .then(res => res.data)
              .then(autor => {
                this.setState({ autores : [...this.state.autores, autor] });
                PopUp.exibeMensagem("success", "Item adicionado com sucesso");
              });
  }

  componentDidMount() {
    ApiService.ListaAutores()
      .then (res => {
        this.setState({ autores: [...this.state.autores, ...res.data] })
      });
  }

  render () {

    ApiService.ListaLivros()
      .then(res => console.log(res.data));
    

    return (
      <div className="container mt-10">
        <h1>Livraria</h1>
          <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor } />
          <Formulario escutadorDeSubmit = { this.escutadorDeSubmit } />
      </div>
    );
  };
  
}
