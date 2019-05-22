import React, { Component } from 'react'
import "./Create.css";
export default class Create extends Component {
    constructor(props) {
        super(props);

        this.createId = this.createId.bind(this)
        this.createName = this.createName.bind(this)
        this.createEmail = this.createEmail.bind(this)
        this.createBirthDay = this.createBirthDay.bind(this)
        this.createAddress = this.createAddress.bind(this)
        this.submit = this.submit.bind(this)


        this.state = {
            id: "",
            name: "",
            email: "",
            birthDay: "",
            address: ""
        }
    }

    createId(e) {
        this.setState({
            id: e.target.value
        })
    }
    createName(e) {
        this.setState({
            name: e.target.value
        })
    }
    createEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    createBirthDay(e) {
        this.setState({
            birthDay: e.target.value
        })
    }
    createAddress(e) {
        this.setState({
            address: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();

        console.log('Enviado');
        console.log(`id: ${this.state.id}`)
        console.log(`name: ${this.state.name}`)
        console.log(`email: ${this.state.email}`)

        
        this.setState({
            id: "",
            name: "",
            email: "",
            birthDay: "",
            address: ""
        })
    }

    render() {
        return (
            <div className="create-form">
                <h3>Nuevo usuario</h3>
                <form submit={this.submit}>
                    <div className="form-group">
                        <label>Id</label>
                        <input type="text" className="form-control" value={this.state.id} onChange={this.createId} />
                    </div>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" className="form-control" value={this.state.nombre} onChange={this.createName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" value={this.state.email} onChange={this.createEmail} />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                
            </div>
        )
    }
}
