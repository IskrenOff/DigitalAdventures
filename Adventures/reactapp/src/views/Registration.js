
import React, { Component } from "react";
import axios from 'axios';


export default class Registration extends Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            userName: '',
            password: '',
            confirmPassword: '',

        }
    }

    onChangeFirstName(e) {this.setState({firstName: e.target.value});}
    onChangeLastName(e) { this.setState({ lastName: e.target.value }); }
    onChangeEmail(e) { this.setState({ email: e.target.value }); }
    onChangeGender(e) { this.setState({ gender: e.target.value }); }
    onChangeUserName(e) { this.setState({ userName: e.target.value }); }
    onChangePassword(e) { this.setState({ password: e.target.value }); }
    onChangeConfirmPassword(e) { this.setState({ confirmPassword: e.target.value }); }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.password === this.state.passwordConform) {
            const obj = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                gender: this.state.gender,
                userName: this.state.userName,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
            };
            axios.post('http://localhost/reactProject/insert.php', obj)
                .then(res => console.log(res.data))
                .catch(error => { console.log(error.response) });

            //Clear text box values
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                gender: '',
                userName: '',
                password: '',
                confirmPassword: '',
            })
        }
        else {
            alert("Password mismatch")
        }
    }

    render() {
        return (
            <form>
                <h3>Registration</h3>
                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        value={this.state.firstName}
                        onChange={this.onChangeFirstName}
                    />
                </div>
                <div className="mb-3">
                    <label>Last name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        value={this.state.lastName}
                        onChange={this.onChangeLastName}
                    />
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                </div>
                <div className="mb-3">
                    <label>Gender</label>
                    <input
                        type="gender"
                        className="form-control"
                        placeholder="Gender"
                        value={this.state.gender}
                        onChange={this.onChangeGender}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />
                </div>
                <div className="mb-3">
                    <label>Confirm Password</label>
                    <input
                        type="confirm password"
                        className="form-control"
                        placeholder="Confirm password"
                        value={this.state.confirmPassword}
                        onChange={this.onChangeConfirmPassword}
                    />
                </div>
                <div className="d-grid">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.onSubmit}> Sign Up                    
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/Login">sign in?</a>
                </p>
            </form>
        );
    }
}
