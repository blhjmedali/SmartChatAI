import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





const Header = () =>{


    return(
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>SmartChatAI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/Chat' className='nav-item px-2 nav-link '>Chat  </Link>
                        <Link to='/Privacy_policy' className="nav-link nav-item px-2 text-muted">Privacy policy</Link>
                        <Link to='/contact' className="nav-link nav-item px-2 text-muted">Contact us</Link>
                        <Link to='/TermOfUse' className="nav-link nav-item px-2 text-muted">Term of use</Link>
                        <Link to='/About' className="nav-link nav-item px-2 text-muted">About</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}



export default Header
