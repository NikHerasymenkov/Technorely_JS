import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Container from "react-bootstrap/cjs/Container";
import {Link} from "react-router-dom";

export const SetNavbar = () => {
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <strong>Lessons8</strong>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">
                        <Link to="/">Users</Link>
                    </Nav.Link>
                    <Nav.Link href="#">
                        <Link to="/redux">Redux</Link>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}
