import React, { Component, Fragment } from 'react';
import Routes from "./Routes.js";

import 'materialize-css/dist/css/materialize.min.css';
import './styles.css';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <Fragment >
        <Header />       
        <Routes />
      </Fragment>
    );  
  }  
}

export default App;
