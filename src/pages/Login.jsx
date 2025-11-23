import { GoogleAuthProvider,  signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';

import React, { useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../firebase/Firebase.config';

const Login = () => {

    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    // Google Provider
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log( result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    // Email Password Login
    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log("Logged in:", result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="">
                <div className="text-center my-10">
                    <h1 className="text-5xl font-bold">Sign-in now!</h1>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <div className="card-body">

                        {/* Email Login */}
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" required />

                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" required />

                                {error && <p className="text-sm text-red-500">{error}</p>}

                                <button className="btn btn-neutral mt-4 w-full">Sign in</button>

                                <p className="mt-2">
                                    New to our website?
                                    <Link to="/register" className="text-red-500"> Register</Link>
                                </p>
                            </fieldset>
                        </form>

                        {/* Google Sign-in Button */}
                        <button
                            className="btn btn-outline mt-3 w-full"
                            type="button"
                            onClick={handleGoogleSignIn}
                        >
                            Sign in with Google
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
