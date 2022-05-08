import React from 'react';
import { useRef } from 'react';
import { Button, Form, } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorElement;
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth
    );
    if (loading || sending) {
        return <Loading></Loading>;
    }

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <div>
            <p className="text-danger">Error: {error.message}</p>
        </div>

    }

    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event => {
        navigate("/register")

    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
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
                {errorElement}

                <p>New to TS Bike Inventory Management? <Link className="text-danger text-decoration-none" to="/register" onClick={navigateRegister}>Please Register</Link></p>
                <p>Forget Password? <button className="btn btn-link text-danger text-decoration-none" onClick={resetPassword}>Reset Password.</button></p>
                <SocialLogin></SocialLogin>
                <ToastContainer />


            </div>
        </div>
    );
};

export default Login;