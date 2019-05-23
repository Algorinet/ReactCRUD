import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./components/Home.js";
import Edit from "./components/Edit.js";
import Create from "./components/Create.js";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="navbar navbar-expand-lg">
            <Link to="/" className="navbar-brand">
              Usuarios
            </Link>
            <Link to="/create" className="navbar-brand">
              Nuevo Usuario
            </Link>
          </nav>
        </header>
          <Route path="/" exact component={Home} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
        
      </div>
    </Router>
  );
}

export default App;
