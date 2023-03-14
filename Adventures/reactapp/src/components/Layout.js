import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Layout(props){
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>Digital Adventures</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
            <Container>{props.children}</Container>
        </div>
    );
}

export default Layout;

//import React, { Component } from 'react';
//import { Container } from 'reactstrap';


//export class Layout extends Component {
//    static displayName = Layout.name;

//    render() {
//        return (
//            <div>
//                <Container>
//                    {this.props.children}
//                </Container>
//            </div>
//        );
//    }
//}


