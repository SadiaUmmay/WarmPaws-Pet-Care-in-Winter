import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Authcontext } from '../provider/AuthProvider';
import { auth } from '../firebase/Firebase.config';
import { Link } from 'react-router';

const Navbar = () => {
  const { user } = useContext(Authcontext);

  const links = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/profile">My Profile</Link></li>
    </>
  );

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log('Sign out done'))

      .catch(error => console.log(error));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl normal-case" to="/">PetPao</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">

        {/* Logged Out */}
        {!user && (
          <div className="flex gap-3">
            <Link
              to="/login"
              className="btn btn-outline btn-sm hover:bg-blue-500 hover:text-white transition-all"
            >
              Log In
            </Link>

            <Link
              to="/register"
              className="btn btn-primary btn-sm hover:bg-blue-600 transition-all"
            >
              Register
            </Link>
          </div>
        )}

        {/* Logged In */}
        {user && (
          <div className="flex items-center gap-3">
            {/* {avatar} */}
            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
              <img
                src={user.photoURL || "https://i.postimg.cc/8C4p7W1k/default-avatar.png"}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
              />
            </div>

            {/* Logout button */}
            <button
              onClick={handleSignOut}
              className="btn  btn-sm hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
