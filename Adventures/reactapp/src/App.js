import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
//import React, { Component } from 'react';
import AppRoutes from './AppRoutes';
import './custom.css';


import Login from './views/Login';
import Registration from './views/Registration';


function App() {
    return (
        <Router>
            <div className="App">
            <div className = "bg">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={'/Login'}>
                            Digital Adventure
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/Login'}>
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/Registration'}>
                                        Registration
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </nav>
                    <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Routes>
                            <Route exact path="/" element={<Login />} />
                            <Route path="/Login" element={<Login />} />
                            <Route path="/Registration" element={<Registration />} />
                        </Routes>
                    </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}
export default App











//import React, { Component } from 'react';
//import { Route, Routes } from 'react-router-dom';
//import AppRoutes from './AppRoutes';
//import { Layout } from './components/Layout';
//import './custom.css';
//export default class App extends Component {
//    static displayName = App.name;

//    render() {
//        return (
//            <Layout>
//                <Routes>
//                    {AppRoutes.map((route, index) => {
//                        const { element, ...rest } = route;
//                        return <Route key={index} {...rest} element={element} />;
//                    })}
//                </Routes>
//            </Layout>
//        );
//    }
//}

