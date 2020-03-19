import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main.js'
import Autores from './pages/Autores.js';
import Livros from './pages/Livros.js';
import Sobre from './pages/Sobre.js';
import NotFound from './pages/NotFound.js';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ Main } />
      <Route path="/pages/autores" component={ Autores } />
      <Route path="/pages/livros" component={ Livros } />
      <Route path="/pages/sobre" component={ Sobre } />
      <Route  component={ NotFound } />
    </Switch>  
  </BrowserRouter>
)

export default Routes