import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event => {
        navigate("/register")

    }

    return (
        <div>
            <div className="container mx-auto w-50">
                <h2 className="text-center mt-2">Please Login!</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className="btn header-button w-50 mx-auto d-block" type="submit">
                        Login
                    </Button>
                </Form>

                <p>New to TS Bike Inventory Management? <Link className="text-danger text-decoration-none" to="/register" onClick={navigateRegister}>Please Register</Link></p>
                <p>Forget Password? <button className="btn btn-link text-danger text-decoration-none">Reset Password.</button></p>


            </div>
        </div>
    );
};

export default Login;