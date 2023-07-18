import React, { useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import "./LogIn.css";
import NavBar from "./NavBar";

const LogIn = () => {
  const [isLogIn, setIsLogin] = useState(false);
    const [isExisting, setIsExisting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

  const submitFormHandler = (e) => {
    e.preventDefault();
      setIsLogin(true);
      setIsLoading(true)
  };

  const existingAccountHandler = () => {
    setIsExisting((prevState)=>!prevState);
    };
    
    const handleFocus = (e) => {
    e.target.classList.add("focus");
  };

  const handleBlur = (e) => {
    e.target.classList.remove("focus");
  };

    return (
        <div>
            <NavBar/>
    <div className="main-body-login" >
      <Container>
        <Card className="card-body-login">
          <Card.Header className="card-border-login">
            {isLogIn || isExisting ? <h1>Sign In</h1> : <h1>Sign Up</h1>}
          </Card.Header>
          <Card.Body className="card-border-login">
            <Form onSubmit={submitFormHandler}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="mb-2"><h5>Your Email</h5></Form.Label>
                <Form.Control type="email" className="mb-2 form-control"
                 onFocus={handleFocus}
                  onBlur={handleBlur}/>
                <Form.Label className="mb-2"><h5>Your Password</h5></Form.Label>
                <Form.Control type="password" className="mb-2 form-control"
                onFocus={handleFocus}
                onBlur={handleBlur}/>
                {isLogIn || isExisting ? (
                  <Button size="lg" className="btn-login">Log In</Button>
                ) : (
                  <Button size="lg" className="btn-login">Create an Account</Button>
                )}
                              {isLoading && (<div className="spinner-container">
                                  <Spinner animation="grow" variant="primary" className="spinner-container" />
                                  <Spinner animation="grow" variant="secondary" className="spinner-container" />
                                  <Spinner animation="grow" variant="success" className="spinner-container" />
                                  <Spinner animation="grow" variant="danger" className="spinner-container" />
                                  <Spinner animation="grow" variant="warning" className="spinner-container" />
                                  <Spinner animation="grow" variant="info" className="spinner-container" />
                                  <Spinner animation="grow" variant="dark" className="spinner-container" />
                              </div>)}
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer className="card-border-login">
                      {!isExisting ? (<p className="existing-account-link" onClick={existingAccountHandler}>
                          Log in with existing account
                      </p>) : (<p className="existing-account-link" onClick={existingAccountHandler}>
                          New User ?
                      </p>
                      )}
          </Card.Footer>
        </Card>
      </Container>
            </div>
            </div>
  );
};

export default LogIn;