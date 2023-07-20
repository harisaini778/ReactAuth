// import React, { useState,useRef } from "react";
// import { Button, Card, Row } from "react-bootstrap";
// import { Form } from "react-bootstrap";
// import { Container } from "react-bootstrap";
// import { Spinner } from "react-bootstrap";
// import "./LogIn.css";
// import NavBar from "./NavBar";
// import axios from "axios";


// const LogIn = () => {
//   const [isLogIn, setIsLogin] = useState(false);
//     const [isExisting, setIsExisting] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     let enteredEmail = useRef(null);
//     let enteredPassword = useRef(null);

//   const submitFormHandler = async (e) => {
//     e.preventDefault();
//       setIsLogin(true);
//       setIsLoading(true);
//     const email = enteredEmail.current.value;
//     const password = enteredPassword.current.value;
//     console.log(email);
//     console.log(password);
//     console.log("form submitted");

//     try {
//       if (isLogIn) {
//         const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7JHwZJZhn48Whxa5Czrm3wic3Nl6Lkdc", {
//           email: email,
//           password: password
//         })
//         setIsLoading(false);
//         console.log(response.data);
//         enteredEmail.current.value = "";
//         enteredPassword.current.value= "";
//       }
//       else {
//         const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7JHwZJZhn48Whxa5Czrm3wic3Nl6Lkdc", {
//           email: email,
//           password: password
//         })
//         setIsLoading(false);
//         console.log(response.data);
//         enteredEmail.current.value = "";
//         enteredPassword.current.value = "";
//       }
//     }
//     catch(error) {
//       setIsLoading(false);
//       console.log(error);
//       alert(error.message);
//       enteredEmail.current.value = "";
//       enteredPassword.current.value = "";
//     }
//   };

//   const existingAccountHandler = () => {
//     setIsExisting((prevState) => !prevState);
//     setIsLogin((prevState) => !prevState);
//     };
    
//     const handleFocus = (e) => {
//     e.target.classList.add("focus");
//   };

//   const handleBlur = (e) => {
//     e.target.classList.remove("focus");
//   };

//     return (
//         <div>
//             <NavBar/>
//     <div className="main-body-login" >
//       <Container>
//         <Card className="card-body-login">
//           <Card.Header className="card-border-login">
//             {isLogIn || isExisting ? <h2>Sign In</h2> : <h2>Sign Up</h2>}
//           </Card.Header>
//           <Card.Body className="card-border-login">
//             <Form onSubmit={submitFormHandler}>
//               <Form.Group as={Row} className="mb-3">
//                 <Form.Label className="mb-2"><h5>Your Email</h5></Form.Label>
//                                     <Form.Control type="email" className="mb-2 form-control"
//                                         onFocus={handleFocus}
//                                         onBlur={handleBlur}
//                                         ref={enteredEmail} />
//                 <Form.Label className="mb-2"><h5>Your Password</h5></Form.Label>
//                 <Form.Control type="password" className="mb-2 form-control"
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//                 ref={enteredPassword}/>
//                 {isLogIn || isExisting ? (
//                   <Button size="lg" className="btn-login" onClick={submitFormHandler} type="submit">Log In</Button>
//                 ) : (
//                   <Button size="lg" className="btn-login" onClick={submitFormHandler} type="submit">Create an Account</Button>
//                 )}
//                               {isLoading && (<div className="spinner-container">
//                                   <Spinner animation="grow" variant="danger" className="spinner-container" />
//                                   <Spinner animation="grow" variant="warning" className="spinner-container" />
//                                   <Spinner animation="grow" variant="info" className="spinner-container" />
//                               </div>)}
//               </Form.Group>
//             </Form>
//           </Card.Body>
//           <Card.Footer className="card-border-login">
//                       {!isExisting ? (<p className="existing-account-link" onClick={existingAccountHandler}>
//                           Log in with existing account
//                       </p>) : (<p className="existing-account-link" onClick={existingAccountHandler}>
//                           New User ? Create an account
//                       </p>
//                       )}
//           </Card.Footer>
//         </Card>
//       </Container>
//             </div>
//             </div>
//   );
// };

// export default LogIn;
import React, { useState, useRef } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import "./LogIn.css";
import NavBar from "./NavBar";
import axios from "axios";

const LogIn = () => {
  const [isLogIn, setIsLogin] = useState(false);
  const [isExisting, setIsExisting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const enteredEmail = useRef(null);
  const enteredPassword = useRef(null);

  const submitFormHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;
    console.log(email);
    console.log(password);
    console.log("form submitted");


try {
  const response = await axios.post(
    isLogIn
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7JHwZJZhn48Whxa5Czrm3wic3Nl6Lkdc"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7JHwZJZhn48Whxa5Czrm3wic3Nl6Lkdc",
    {
      email: email,
      password: password,
      returnSecureToken: true
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  setIsLoading(false);
  console.log(response.data);
  enteredEmail.current.value = "";
  enteredPassword.current.value = "";
} catch (error) {
      setIsLoading(false);
      console.log(error);
      alert(error.message);
      enteredEmail.current.value = "";
      enteredPassword.current.value = "";
    }
  };

  const existingAccountHandler = () => {
    setIsExisting((prevState) => !prevState);
    setIsLogin((prevState) => !prevState);
  };

  const handleFocus = (e) => {
    e.target.classList.add("focus");
  };

  const handleBlur = (e) => {
    e.target.classList.remove("focus");
  };

  return (
    <div>
      <NavBar />
      <div className="main-body-login">
        <Container>
          <Card className="card-body-login">
            <Card.Header className="card-border-login">
              {isLogIn || isExisting ? <h2>Sign In</h2> : <h2>Sign Up</h2>}
            </Card.Header>
            <Card.Body className="card-border-login">
              <Form onSubmit={submitFormHandler}>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="mb-2">
                    <h5>Your Email</h5>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    className="mb-2 form-control"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={enteredEmail}
                  />
                  <Form.Label className="mb-2">
                    <h5>Your Password</h5>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    className="mb-2 form-control"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={enteredPassword}
                  />
                  {isLogIn || isExisting ? (
                    <Button
                      size="lg"
                      className="btn-login"
                      type="submit"
                    >
                      Log In
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      className="btn-login"
                      type="submit"
                    >
                      Create an Account
                    </Button>
                  )}
                  {isLoading && (
                    <div className="spinner-container">
                      <Spinner
                        animation="grow"
                        variant="danger"
                        className="spinner-container"
                      />
                      <Spinner
                        animation="grow"
                        variant="warning"
                        className="spinner-container"
                      />
                      <Spinner
                        animation="grow"
                        variant="info"
                        className="spinner-container"
                      />
                    </div>
                  )}
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Footer className="card-border-login">
              {!isExisting ? (
                <p
                  className="existing-account-link"
                  onClick={existingAccountHandler}
                >
                  Log in with an existing account
                </p>
              ) : (
                <p
                  className="existing-account-link"
                  onClick={existingAccountHandler}
                >
                  New User? Create an account
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
