import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Edit from "./components/Edit.js";
import Create from "./components/Create.js";

class App extends Component {
  state = {
    users: [
      {
        id: 100,
        name: "el nombre de la rosa",
        price: 20,
        author: "umberto eco"
      },
      {
        id: 200,
        name: "the bible",
        price: 10,
        author: "mixed authors"
      }
    ]
  }

  addNewUser(newUserDetails) {
    // here we extract from the state and clone all the users
    var newUser = [...this.state.users]
    // adding a new books coming from ProductForm
    newUser.push(newUserDetails)

    // we re-add in the state all the books including the new one
    this.setState({
      ...this.state,
      users: newUser
    })
  }
  render() {
    return (
      <Router>
        <div className="container">
         <Header />
          <Route path="/" exact component={Home} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
        
        <h1>Books iteration in APP</h1>
        <ul>
          {
            this.state.users.map(user => <li key={user.id}>{user.name} - {user.email} eur</li>)
          }
        </ul>
        <hr></hr>
       
        {/* <Create bookShop="fnac callao" newUser={(newUser) => this.addNewUser(newUser)}></Create> */}

        </div>



      </Router>
    );
  }
}

export default App;
