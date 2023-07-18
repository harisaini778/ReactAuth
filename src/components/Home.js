import React from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
import "./Home.css";

const Home = () => {
 
    
    return (
        <div>
            <NavBar/>
            <Container className="home-body">
                <h1>
                    Welcome On Board !
                </h1>
            </Container>
        </div>
    )
}

export default Home;