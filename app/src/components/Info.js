import React, { Component } from "react";
import axios from "axios";
import "./Create.css";
import "./home.css";
import moment from "moment";
import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    user: {
      name: "",
      email: "",
      birthDay: "",
      street: "",
      state: "",
      city: "",
      country: "",
      zip: ""
    }
  };

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo() {
    const idUser = this.props.match.params.id;
    axios.get(`http://localhost:5000/getUsersById/${idUser}`).then(response => {
      // const allUsers = response.data;
      const userData = response.data;
      this.setState({
        ...this.state,
        user: userData
      });
      console.log(this.state.users);
    });
  }

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead className="tableHead">
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Fecha</th>
              <th>Dirección</th>
             
            </tr>
          </thead>
          <tbody>
            <tr className="listado">
              <td>
                <h4>{this.state.user.name}</h4>
              </td>
              <td>
                <p>{this.state.user.email}</p>
              </td>
              <td>
                <h5>{moment(this.state.user.birthDay).format("L")}</h5>
              </td>
              <td>{this.state.user.street}</td>
            </tr>
        
          </tbody>
        </table>
        <table className="table">
          <thead className="tableHead">
            <tr>
              <th>Calle</th>
              <th>Localidad</th>
              <th>Provincia</th>
              <th>País</th>
            
            </tr>
          </thead>
          <tbody>
            <tr className="listado">
              <td>
                <p>{this.state.user.street}</p>
              </td>
              <td>
                <p>{this.state.user.state}</p>
              </td>
              <td>
                <p>{this.state.user.city}</p>
              </td>
              <td>{this.state.user.country}</td>
            </tr>
        
          </tbody>
        </table>
        <td>
                  <Link to={`/`}><button type="button" className="btn btn-outline-info"><MaterialIcon icon="replay" color='white' /></button></Link>
                  </td>
      </div>
    );
  }
}
