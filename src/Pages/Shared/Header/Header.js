import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <h5>TS Bike Inventory</h5>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>

                            <Nav.Link href="blog">Blogs</Nav.Link>
                        </Nav>
                        <Nav>

                            {
                                user && <>
                                    <Nav.Link as={Link} to="addproducts">Add</Nav.Link>
                                    <Nav.Link as={Link} to="manageinventory">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="myitem">My Item</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>SignOut</button>
                                    :
                                    <Nav.Link as={Link} to="login">Login </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;