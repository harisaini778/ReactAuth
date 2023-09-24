import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
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
      <Navbar style={{
               backgroundImage: "linear-gradient(to right, #24243e, #302b63, #0f0c29)"
          }}>
        <Container >
                  <Navbar.Brand > 
            <h1 style={{color:"white"}}>ReactAuth</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/Home" style={{color:"white",fontWeight:"bolder",
                              transition: "0.3s ease"
                          }} onMouseOver={(e) => e.currentTarget.style.borderBottom = "3px solid white"}
                           onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}>Home</Nav.Link>
                          {!isLoggedIn && <Nav.Link href="/LogIn" style={{
                              color: "white", fontWeight: "bolder"
                          }}onMouseOver={(e) => e.currentTarget.style.borderBottom = "3px solid white"}
                           onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"} >LogIn</Nav.Link>}
                          {isLoggedIn && <Nav.Link href="/Profile" style={{ color: "white", fontWeight: "bolder" }}
                          onMouseOver={(e) => e.currentTarget.style.borderBottom = "3px solid white"}
                           onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}>Profile</Nav.Link>}
              {isLoggedIn && <Button className="btn btn-light" style={{marginLeft:"8px"}} onClick={logOutHandeler}>LogOut</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
