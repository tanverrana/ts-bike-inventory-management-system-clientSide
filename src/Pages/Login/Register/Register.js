import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/login");
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="register-form">
            <h2 className="text-center my-4">Please Register!</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder="Enter Your Name" />
                <input type="email" name="email" id="" placeholder="Enter Your Email" required /><br />
                <input type="password" name="password" id="" placeholder="Enter Your Password" required />
                <input className="btn btn-primary w-50 mx-auto" type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link className="text-danger text-decoration-none" to="/login" onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Register;