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
    // Token is available or changed, handle it here if needed.
    // For example, you can perform any action you need with the token when it becomes available.
    // You can also add other dependencies to the array if needed.
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



  return (
    <div>
      <NavBar />
      <h1>Your Profile</h1>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group>
          <Form.Label id="password">
            <h5>New Password</h5>
          </Form.Label>
          <Form.Control
            type="password"
            id="password"
            ref={enteredNewPassword}
          />
          <Button type="submit">Change Password</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Profile;
