import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
const Header = () => {
  const cart = useSelector((state)=> state.cart)
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart({cart?.length})</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
