
import React, { Component, useState } from "react";
import axios from 'axios';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

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


    onChangeFirstName(event) {this.setState({firstName: event.target.value});}
    onChangeLastName(event) { this.setState({ lastName: event.target.value }); }
    onChangeEmail(event) { this.setState({ email: event.target.value }); }
    onChangeGender(event) { this.setState({ gender: event.target.value }); }
    onChangeUserName(event) { this.setState({ userName: event.target.value }); }
    onChangePassword(event) { this.setState({ password: event.target.value }); }
    onChangeConfirmPassword(event) { this.setState({ confirmPassword: event.target.value }); }


    register(event) {
        fetch('https://localhost:3000/Api/Registration', {
            method: 'post',
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify
                ({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    gender: this.state.gender,
                    userName: this.state.userName,
                    password: this.state.password
                })
        }).then((Response) => Response.json());
    }

    onSubmit(e) {
        e.preventDefault();

        //check if the password matches the confirmed password
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

//function RegistrationForm() {
//    const [firstName, setFirstName] = useState('');
//    const [lastName, setLastName] = useState('');
//    const [email, setEmail] = useState('');
//    const [userName, setUserName] = useState('');
//    const [password, setPassword] = useState('');
//    const [confirmPassword, setConfirmPassword] = useState('');

//    function handleSubmit(event) {
//        event.preventDefauult();

//        const regData = {
//            firstName,
//            lastName,
//            email,
//            userName,
//            password,
//            confirmPassword
//        };

//        fetch('/api/Registration', {
//            method: 'POST',
//            headers: {
//                'Content-Type': 'application/json',
//            },
//            body: JSON.stringify(regData),
//        })
//            .then((response) => response.json())
//            .then((regData) => {
//                console.log('Success:', regData);
//            })
//            .catch((error) => {
//                console.error('Error:', error);
//            });
//    }
//}


    render() {
        return (
            <form className="box">
                <NavLink to={'/login'}>Login</NavLink>
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
                    <label>UserName</label>
                    <input
                        type="username"
                        className="form-control"
                        placeholder="Enter UserName"
                        value={this.state.userName}
                        onChange={this.onChangeUserName}
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

