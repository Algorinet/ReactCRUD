import React, { Component } from "react";
import axios from "axios";
import "./home.css";
import MaterialIcon from "material-icons-react";
import moment from "moment";

export default class Home extends Component {
  state = {
    users: []
  };
  componentDidMount() {
   this.getUsers();
  }

  getUsers() {
    axios.get("http://localhost:5000/getusers").then(response => {
        const allUsers = response.data;
  
        this.setState({
          ...this.state,
          users: allUsers
        });
      });
  }
  deleteUser(id) {
      console.log("eliminando", id)
      axios.delete(`http://localhost:5000/deleteUsersById/${id}`).then(data => {
          this.getUsers();
      })
  }
  updateUser(id) {
      console.log("editando ")
  }

  render() {
    return (
      <div className="container-table">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Fecha</th>
              <th>Dirección</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, idx) => {
              return (
                <tr key={idx} className="listado">
                  <td>
                    <h4>{user.name}</h4>
                  </td>
                  <td>
                    <p>{user.email}</p>
                  </td>
                  <td>
                    <h5>{moment(user.birthDay).format('L')}</h5>
                  </td>
                  <td>{user.street}</td>
                
                  <td>
                      <button type="button" className="btn btn-outline-primary" onClick={() => this.updateUser(user._id)}><MaterialIcon icon="dashboard" color='#034244' /></button>
                  </td>
                  <td>
                      <button type="button" className="btn btn-outline-danger" onClick={() => this.deleteUser(user._id)}><MaterialIcon icon="delete" color='#034244' /></button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
