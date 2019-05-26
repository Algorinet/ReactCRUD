import React, { Component } from "react";
import "./Create.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class Create extends Component {
  constructor(props) {
    super(props);

    this.createName = this.createName.bind(this);
    this.createEmail = this.createEmail.bind(this);
    this.createBirthDay = this.createBirthDay.bind(this);
    this.createStreet = this.createStreet.bind(this);
    this.createState = this.createState.bind(this);
    this.createCity = this.createCity.bind(this);
    this.createZip = this.createZip.bind(this);
    this.createCountry = this.createCountry.bind(this);

    this.state = {
      name: "",
      email: "",
      birthDay: "",
      street: "",
      state: "",
      city: "",
      country: "",
      zip: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      birthDay: date
    });
  }

  createName(e) {
    this.setState({
      name: e.target.value
    });
  }
  createEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  createBirthDay(e) {
    this.setState({
      birthDay: e.target.value
    });
  }
  createStreet(e) {
    this.setState({
      street: e.target.value
    });
  }
  createState(e) {
    this.setState({
      state: e.target.value
    });
  }
  createCity(e) {
    this.setState({
      city: e.target.value
    });
  }
  createCountry(e) {
    this.setState({
      country: e.target.value
    });
  }
  createZip(e) {
    this.setState({
      zip: e.target.value
    });
  }
  createUser() {
      const {
        name,email,birthDay,street,state,city,country,zip
      } = this.state
    axios
      .post("http://localhost:5005/createUsers", {
        // user: this.state.user
        name,email,birthDay,street,state,city,country,zip
        
      })
      .then(response => {
        this.setState({
          ...this.state
          
        });
        this.props.history.push('/')
      })
      .catch(err => this.setState({ error: "Authentication error" }));
  }



  render() {
    return (
      <div className="container">
        <h6 className="titulo">Crear usuario</h6>
        <div className="container-form">
          <form>
            <div className="formLeft">
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.createName}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.createEmail}
                />
              </div>
              <div className="form-group calendar">
                <label>Fecha</label>

                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={this.state.birthDay}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>País</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.country}
                  onChange={this.createCountry}
                />
              </div>
            </div>
            <div className="formRight">
              <div className="form-group">
                <label>Calle</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.street}
                  onChange={this.createStreet}
                />
              </div>
              <div className="form-group">
                <label>Localidad</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.state}
                  onChange={this.createState}
                />
              </div>
              <div className="form-group">
                <label>Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.city}
                  onChange={this.createCity}
                />
              </div>
              <div className="form-group">
                <label>Código Postal</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.zip}
                  onChange={this.createZip}
                />
              </div>
            </div>
          </form>
          <button
            type="button"
            className="btn btn-info buttonForm"
            onClick={() => this.createUser()}
          >
            Enviar
          </button>
        </div>
      </div>
    );
  }
}
