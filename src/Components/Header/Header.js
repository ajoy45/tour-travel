import React from 'react';
import { Link } from "react-router-dom";
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import logo from '../../images/logo/logo.png'
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.ini';
import Logout from '../LogOut/Logout';
const Header = () => {
  const[remove]=Logout()
  const [user] = useAuthState(auth);
  // console.log(user?.displayName)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-header" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/'>
    <img src={logo} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/rent'>Rent For Tour</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
      {user&&<NavDropdown title="Dashboard" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to='/mybooking'>My Booking</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='./allbooking'>All Booking</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/addnewcar'>Add a Car</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={remove}>Logout</NavDropdown.Item>
      </NavDropdown>}
    </Nav>
    <Nav>
      {
      user?<Nav.Link>Signed in as:{user?.displayName}</Nav.Link>:<Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
    
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;