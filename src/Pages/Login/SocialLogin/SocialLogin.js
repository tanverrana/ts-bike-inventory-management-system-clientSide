import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from "../../../images/social/google-logo.png";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className="mt-2 px-2">OR</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>

            <div>
                <button onClick={() => signInWithGoogle()} className="btn btn-primary w-50 d-block mx-auto my-3">
                    <img style={{ width: "30px" }} src={google} alt="" />
                    <span className="px-2">Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;