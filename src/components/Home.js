import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./Home.css";

const Home = () => {
 
    
    return (
        <div>
             <Navbar className="navbar-nav" variant="dark">
      <Container>
                    <Navbar.Brand href="#home">
                        <h1>ReactAuth</h1></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link className="home-link">Home</Nav.Link>
                            <Nav.Link className="login-link">LogIn</Nav.Link>
                            <Nav.Link className="profile-link">Profile</Nav.Link>
                             <Nav.Link className="logout-link">LogOut</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
            </Navbar>
            <Container className="home-body">
                <h1>
                    Welcome On Board !
                </h1>
            </Container>
        </div>
    )
}

export default Home;