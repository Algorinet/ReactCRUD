import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Link } from "react-router-dom";




const header = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">Gestion de usuarios con React</h1>
      <nav className="navbar navbar-expand-lg">
      <Link to="/" className="navbar-brand">Usuarios</Link>
      <Link to="/create" className="navbar-brand">Crear</Link>


      </nav>
    </header>
  );
}

export default header;