import React from "react";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import logo from "./logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./components/Home.js";
import Edit from "./components/Edit.js";
import Create from "./components/Create.js";
import Info from "./components/Info.js";

function App() {
  return (
    <React.Fragment>
     

     
      <div className="App">
          <Router>
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
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/info/:id" component={Info} />
        </Switch>
          </Router>
        
      </div>

    </React.Fragment>
    
  );
}

export default App;
