import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useCart from '../../Hook/useCart';
import useService from '../../Hook/useService';
import imageIcon from '../../images/reading.png'
import "./Header.css"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {

    const [service, setService] = useService()
    const [cart, setCart] = useCart(service)

    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        totalQuantity += product.quantity;
    }



    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="banner">
            <Navbar collapseOnSelect expand="lg" variant="dark" className="py-5" >
                <Container >
                    <Navbar.Brand to="/home"><img className="navIcon" src={imageIcon} alt="" /><span className="ps-3 text-success fs-4 fw-bold">Learn with Network</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className="fs-5 fw-bold  ">
                            <NavLink to="/home" className="text-decoration-none text-light">Home</NavLink>
                            <NavLink to="/service" className="text-decoration-none text-light ms-3">Service</NavLink>
                            <NavLink to="/cart" className="text-decoration-none text-light ms-3">Cart</NavLink>
                            <NavLink to="/contact" className="text-decoration-none text-light ms-3">Contact</NavLink>
                            <NavLink to="/about" className="text-decoration-none text-light ms-3">About</NavLink>
                            <div className="text-decoration-none text-success ms-3 rounded-pill bg-dark p-2"> <span className="mx-2">{shoppingCart}</span>{totalQuantity}</div>
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