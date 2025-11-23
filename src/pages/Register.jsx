import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/Firebase.config';

import { Link, useNavigate } from 'react-router';
import { Eye, EyeOff } from 'lucide-react';
import toast, { ToastBar, Toaster } from 'react-hot-toast';


const Register = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Google Provider
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log("Google user:", result.user);
                toast.success('Signed Up with Google!');
                navigate('/');
                setUser(result.user);
            })
            .catch(error => {
                console.log("Google Error:", error.message);
            });
    };

    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;
        const name = event.target.name.value;
        const photo = event.target.photo.value

        console.log('register click', email, terms, name, photo)

        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+\-={}[\]|:;"'<>,.?/]).{6,}$/;
        if (!passwordPattern.test(password)) {
            setError('Password must contain uppercase, lowercase, special char & be at least 6 characters!')
            return;
        }
        setError('');
        setSuccess(false);

        if (!terms) {
            setError('Please accept our terms and conditions')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log('after creation of a new user', result.user)

                setSuccess(true)
                
                navigate('/');
                event.target.reset();

                // update user profile 
                const profile ={
                    displayName : name,
                    photoURL : photo
                }
                updateProfile(result.user, profile)
                .then(() =>{})
                .catch(() => {
                   
                  });
            })
            .catch((error) => {
                console.log(error)
                setError(error.message)
            });
        };
        const toggleHandlePassShow = (event) => {
            event.preventDefault();
            setShowPass(!showPass);
        }
    
    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <form onSubmit={handleRegister}>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name="email" className="input" placeholder="Email" />
                                    <label className="label">Name</label>
                                    <input type="text" name="name" className="input" placeholder="Your name" />
                                    {/* user photo url */}

                                    <label className="label">Photo Url</label>
                                    <input type="text" name="photo" className="input" placeholder="Photo Url" />
                                    <div className='relative'>
                                    <label className="label">Password</label>
                                    <input type={showPass ? 'text' : 'password'} name='password' className="input" placeholder="Password" />
                                    <button onClick={toggleHandlePassShow} className=' btn-xs absolute top-7 right-3'>
                                        {showPass ? <EyeOff></EyeOff> : <Eye></Eye>}
                                    </button>
                                </div>
                                    <div>
                                        <label className="label">
                                            <input type="checkbox" name='terms' className="checkbox" />
                                            Accept Our Terms and conditions
                                        </label>
                                    </div>
                                    <div>
                                        <p>Already Have an Account? <Link to={'/login'} className='text-red-500'>Log in</Link></p>
                                    </div>
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                                {
                                    success && <p className=' text-green-600'>Account created successfully</p>
                                }
                                {
                                    error && <p className='text-sm text-red-500'>{error}</p>
                                }
                            </div>
                        </div>
                             {/* Google Sign-in Button */}
                             <button  className="btn btn-outline mt-3 w-full" type="button" onClick={handleGoogleSignIn}>  Sign in with Google</button>
                    </form>
                 
                </div>
            </div>

        </div>
    );
};

export default Register;

































// import { Link } from 'react-router';
// import { Eye, EyeOff } from 'lucide-react';
// import { useContext } from 'react';
// import { Authcontext } from '../provider/AuthProvider';
// import { updateProfile } from 'firebase/auth';


// const Register = () => {
//   const {registerWithEmailPassword} = useContext(Authcontext);

//   const handleSubmit= (event)=>{
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     const name = event.target.name.value;
//     const photo = event.target.photo.value
//     registerWithEmailPassword(email, password, name, photo)
//     .then(result =>{
//          // update user profile 
//          const profile ={
//             displayName : name,
//             photoURL : photo
//         }
//         updateProfile(result.user, profile)
//         .then(() =>{
//             console.log(result.user)
//             setUser(result.user)
//         })
//         .catch(() => {
           
//           });
         
//     })
//     .catch(error=>{
//         console.log(error.message)
//     })
//   }
//     return (
//         <div>

//             <div className="hero bg-base-200 min-h-screen">
//                 <div className="hero-content flex-col lg:flex-row-reverse">
//                     <div className="text-center lg:text-left">
//                         <h1 className="text-5xl font-bold">Register now!</h1>

//                     </div>
//                     <form onSubmit={handleSubmit}>
//                         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                             <div className="card-body">
//                                 <fieldset  className="fieldset">
//                                     <label className="label">Name</label>
//                                     <input type="text" name="name" className="input" placeholder="Your name" />
//                                     <label className="label">Email</label>
//                                     <input type="email" name="email" className="input" placeholder="Email" />

//                                     {/* user photo url */}

//                                     <label className="label">Photo Url</label>
//                                     <input type="text" name="photo" className="input" placeholder="Photo Url" />
//                                     <div className='relative'>
//                                         <label className="label">Password</label>
//                                         <input  name='password' className="input" placeholder="Password" />
//                                         {/* <button  className=' btn-xs absolute top-7 right-3'>
//                                             {showPass ? <EyeOff></EyeOff> : <Eye></Eye>}
//                                         </button> */}
//                                     </div>
                                 
//                                     <div>
//                                         <p>Already Have an Account? <Link to={'/login'} className='text-red-500'>Log in</Link></p>
//                                     </div>
//                                     <button className="btn btn-neutral mt-4">Register</button>
//                                 </fieldset>
                              
//                             </div>
//                         </div>

//                     </form>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Register;