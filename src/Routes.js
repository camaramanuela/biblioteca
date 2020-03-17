import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Main.js'
import Autores from './Autores.js';
import Livros from './Livros.js';
import Sobre from './Sobre.js';
import NotFound from './NotFound.js';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ Main } />
      <Route path="/autores" component={ Autores } />
      <Route path="/livros" component={ Livros } />
      <Route path="/sobre" component={ Sobre } />
      <Route  component={ NotFound } />
    </Switch>  
  </BrowserRouter>
)

export default Routes