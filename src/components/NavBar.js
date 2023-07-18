import React from "react";
import {Navbar,Nav,Container} from "react-bootstrap"

const NavBar = () => {

    return (
        <div>
                  <Navbar className="navbar-nav" variant="dark">
      <Container>
                    <Navbar.Brand href="#home">
                        <h1>ReactAuth</h1></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link className="home-link" href="/Home">Home</Nav.Link>
                            <Nav.Link className="login-link" href="/LogIn">LogIn</Nav.Link>
                            <Nav.Link className="profile-link">Profile</Nav.Link>
                             <Nav.Link className="logout-link">LogOut</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;