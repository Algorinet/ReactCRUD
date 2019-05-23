import React, { Component } from "react";
import "./Create.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import moment from 'moment';

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
          name: '',
        email: '',
        birthDay: '',
        street: '',
        state: '',
        city: '',
        country: '',
        zip: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({...this.state, user:{...this.state.user,[e.target.name]: e.target.value}  });
    /*  this.setState({
      birthDay: date
      [e.target.name]: e.target.value
    }); */
  }
  handleChangeDate(date) {
      const newDate = moment(date).format('L')
      console.log(newDate)
    // this.setState({...this.state, user:{...this.state.user,[e.target.name]: moment(e.target.value).format('L')}  });
    this.setState({
       ...this.state, user:{...this.state.user, birthDay: newDate}
      });
  }

  updateUser=(id) =>{
      axios
      .put(`http://localhost:5000/updateUsersById/${id}`,
      this.state.user
      )
      .then(response => {
        this.setState({
          ...this.state
        });
        this.props.history.push('/')
      })
      .catch(err => this.setState({ error: "Authentication error" }));
  }
  componentDidMount() {
    const idUser = this.props.match.params.id;
    axios.get(`http://localhost:5000/getUsersById/${idUser}`).then(response => {
      // const allUsers = response.data;
      const userData = response.data;
      this.setState({
        ...this.state,
        user: userData
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <h6>Editar Usuario</h6>
        <div className="container-form">
          <form>
            <div className="formLeft">
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder={this.state.user.name}
                  value={this.state.user.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder={this.state.user.email}
                  value={this.state.user.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group calendar">
                <label>Fecha</label>

                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  placeholder={this.state.user.birthDay}
                  name="birthDay"
                  value={this.state.user.birthDay}
                  onChange={this.handleChangeDate}
                />
              </div>
              <div className="form-group">
                <label>País</label>
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  placeholder={this.state.user.country}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="formRight">
              <div className="form-group">
                <label>Calle</label>
                <input
                  type="text"
                  className="form-control"
                  name="street"
                  placeholder={this.state.user.street}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Localidad</label>
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  placeholder={this.state.user.state}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  placeholder={this.state.user.city}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Código Postal</label>
                <input
                  type="text"
                  className="form-control"
                  name="zip"
                  placeholder={this.state.user.zip}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </form>
          <button
            type="button"
            className="btn btn-info buttonForm"
            onClick={() => this.updateUser(this.state.user._id)}
          >
            Enviar
          </button>
        </div>
      </div>
    );
  }
}
