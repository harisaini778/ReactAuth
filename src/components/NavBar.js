import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap"
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const AuthCtx = useContext(AuthContext);

    const isLoggedIn = AuthCtx.isLoggedIn;

    const navigate = useNavigate();

    const logOutHandeler = () => {
        if (isLoggedIn) {
            AuthCtx.logout();
            navigate("/Home");
        }

    }

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
                            {!isLoggedIn && <Nav.Link className="login-link" href="/LogIn">LogIn</Nav.Link>}
                            {isLoggedIn && <Nav.Link className="profile-link" href="/Profile">Profile</Nav.Link>}
                            {isLoggedIn && <Button className="logout-link" onClick={logOutHandeler}>LogOut</Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;