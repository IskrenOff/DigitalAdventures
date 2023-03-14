//import { useFormik } from 'formik';
import React, { Component } from 'react'
import { loginSchema } from '../common/userSchemas';
import './Login.css'
import { Formik, Form} from 'formik';
import { NavLink } from 'react-router-dom';


export default class Login extends Component {

   
    render() {
      
        return (

            <Formik initialValues={{ email: '', password: '' }} validationSchema={loginSchema} onSubmit={(values) => { console.log(values.email, values.password) }} >
                {({ errors, touched }) => (
                    <Form className="box">
                        <NavLink to={'/registration'}>Register</NavLink>
                        <h3>Sign In</h3>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                name="email"
                                onChange={(event) => { console.log(event.target.value) }}
                                error={touched.email && Boolean(errors.email)}

                            />
                            <div>{touched.email ? errors.email : ''}</div>
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                name="password"

                            />
                            <div>{touched.password ? errors.password : ''}</div>
                        </div>

                        <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                />
                                <label className="custom-control-label" htmlFor="customCheck1">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </Form>)}
                </Formik>  
        )
    }
}

