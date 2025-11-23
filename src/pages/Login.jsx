import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { auth } from '../firebase/Firebase.config';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Login = () => {

    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const [showPass, setShowPass] = useState(false);
    const emailref = useRef();
    const navigate = useNavigate();

    const googleprovider = new GoogleAuthProvider();

    const handlegooglesignin = () => {
        signInWithPopup(auth, googleprovider)
            .then(result => {
                setUser(result.user);
                toast.success('Logged in with Google!');
                navigate('/');
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const email = emailref.current.value;
        const password = e.target.password.value;

        setError('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                toast.success('Login successful!');
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
                toast.error(error.message);
            });
    };

    const handleForgetPassword = () => {
        const email = emailref.current.value;

        if (!email) {
            toast.error("Please enter your email first!");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('Password reset email sent! Redirecting to Gmail...');
                
                    window.location.href = "https://mail.google.com";
              
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const toggleHandlePassShow = (event) => {
        event.preventDefault();
        setShowPass(!showPass);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="">
                <div className="text-center my-10">
                    <h1 className="text-5xl font-bold">Sign-in now!</h1>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <div className="card-body">

                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input
                                placeholder='Email'
                                    type="email"
                                    name="email"
                                    className="input"
                                    required
                                    ref={emailref}
                                />

                                <div className='relative'>
                                    <label className="label">Password</label>
                                    <input
                                        type={showPass ? 'text' : 'password'}
                                        name='password'
                                        className="input"
                                        placeholder="Password"
                                        required
                                    />
                                    <button
                                        onClick={toggleHandlePassShow}
                                        className=' btn-xs absolute top-7 right-3'
                                    >
                                        {showPass ? <EyeOff /> : <Eye />}
                                    </button>
                                </div>

                                {error && <p className="text-sm text-red-500">{error}</p>}

                                <button className="btn btn-neutral mt-4 w-full">Sign in</button>

                                <p
                                    className='cursor-pointer text-blue-500 mt-1'
                                    onClick={handleForgetPassword}
                                >
                                    Forget password?
                                </p>

                                <p className="mt-2">
                                    New to our website?
                                    <Link to="/register" className="text-red-500"> Register</Link>
                                </p>
                            </fieldset>
                        </form>

                        <button
                            className="btn btn-outline mt-3 w-full"
                            type="button"
                            onClick={handlegooglesignin}
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
