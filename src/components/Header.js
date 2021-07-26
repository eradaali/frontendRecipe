import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
<script src="https://developer.edamam.com/attribution/badge.js"></script>

export class Header extends Component {
render() {
return (
<div>
<Navbar bg="dark" variant="dark">
<Container>
    <Navbar.Brand href="/">food recipes</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/favorite">my recipes</Nav.Link>
    </Nav>
</Container>
</Navbar>
</div>
)
}
}

export default Header
