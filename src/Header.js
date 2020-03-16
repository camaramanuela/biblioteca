import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper #4dd0e1 cyan lighten-2">
        <a href="/" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/autores">Autores</a></li>
          <li><a href="/livros">Livros</a></li>
          <li><a href="/sobre">Sobre</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;