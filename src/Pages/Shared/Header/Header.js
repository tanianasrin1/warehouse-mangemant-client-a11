import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
              Oil-Service
              </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="home#InventoryItems">InventoryItems</Nav.Link>
              <Nav.Link href="home#Service">Service</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
            

                 {
                    user && <>
                    <Nav.Link as={Link} to="/manageInventory">ManageInventory</Nav.Link>
                    <Nav.Link as={Link} to="/addItem">AddItem</Nav.Link>
                   </>
                 }
               <Nav.Link as={Link} to="/myItem">My Item</Nav.Link>
               <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                 {
                       user ? 
                       <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>sign out</button>
                       :
                      <Nav.Link as={Link} to="/login">
                       Login
                      </Nav.Link>
                 }
                  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
