import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import imageIcon from '../../images/reading.png'
import "./Header.css"

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (<div className="banner">
        <Navbar collapseOnSelect expand="lg" variant="dark" className="py-5" >
            <Container >
                <Navbar.Brand to="/home"><img className="navIcon" src={imageIcon} alt="" /><span className="ps-3 text-success fs-4 fw-bold">Learn with Network</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav className="fs-5 fw-bold  ">
                        <NavLink activeStyle={activeStyle} to="/home" className="text-decoration-none text-light">Home</NavLink>
                        <NavLink activeStyle={activeStyle} to="/service" className="text-decoration-none text-light ms-3">
                            Service
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/contact" className="text-decoration-none text-light ms-3">Contact</NavLink>
                        <NavLink activeStyle={activeStyle} to="/about" className="text-decoration-none text-light ms-3">About</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
        <div className="text-light text-center my-5 py-5" >
            <h1>THE SERVICES
                WE’RE OFFERING</h1>
            <p className="py-2">
                There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humour.
            </p>
            <NavLink to='/service'> <button className="btn btn-success">View Services</button></NavLink>
        </div>

    </div>
    );
};

export default Header;