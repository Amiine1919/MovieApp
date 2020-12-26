import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Nav, Navbar, FormControl } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <h3>MovieApp</h3>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <img className="navbar-log" src="/logo.svg" alt="MovieApp" />
      </Navbar>
      <img className="movies-img" src="/movie.png" alt="movies" />
    </div>
  );
};

export default NavBar;
