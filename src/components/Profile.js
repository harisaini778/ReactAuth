import React, { useRef, useContext, useEffect } from "react";
import NavBar from "./NavBar";
import { Form } from "react-bootstrap";
import "./Profile.css";
import { Button } from "react-bootstrap";
import AuthContext from "./store/auth-context";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const AuthCtx = useContext(AuthContext);
  const enteredNewPassword = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Token updated:", AuthCtx.token);
  }, [AuthCtx.token]);

  const onSubmitHandler = (event) => {
  event.preventDefault();
  const newUpdatedPassword = enteredNewPassword.current.value;

  fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB7JHwZJZhn48Whxa5Czrm3wic3Nl6Lkdc",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken: AuthCtx.token,
        password: newUpdatedPassword,
        returnSecureToken: true,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data && data.error) {
        alert(data.error.message);
      } else {
        alert("Your password has been updated successfully!");
        console.log(data);
        enteredNewPassword.current.value = "";
      }
      navigate("/LogIn");
    })
    .catch((error) => {
      console.log(error);
      enteredNewPassword.current.value = "";
    });
};

  const isSmallScreen = window.innerWidth <= 576;



  return (
    <div>
      <NavBar />
      <h1 style={{ color: "navy", textAlign: "center" }} className="mt-5">Your Profile</h1>
      <div style={{
        display: "flex", justifyContent: "center",
       }} className="mt-5">
      <Form onSubmit={onSubmitHandler} style={{ width : isSmallScreen ? "70%" : "40%"}}>
        <Form.Group>
          <Form.Label id="password">
            <h5 style={{color:"navy"}}>New Password</h5>
          </Form.Label>
          <Form.Control
            type="password"
            id="password"
            ref={enteredNewPassword}
          />
          <Button type="submit" className="mt-2" style={{
               backgroundImage: "linear-gradient(to right, #24243e, #302b63, #0f0c29)"
          }}>Change Password</Button>
        </Form.Group>
        </Form>
        </div>
    </div>
  );
};

export default Profile;
