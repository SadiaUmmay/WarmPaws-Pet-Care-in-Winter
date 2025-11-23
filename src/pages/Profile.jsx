import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.config';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setName(currentUser.displayName || '');
        setPhotoURL(currentUser.photoURL || '');
      } else {
        toast.error('You must login first!');
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleUpdateProfile = () => {
    if (!name && !photoURL) {
      toast.error('Provide at least one field to update!');
      return;
    }

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    })
      .then(() => {
        toast.success('Profile updated successfully!');
        setUser({ ...user, displayName: name, photoURL: photoURL });
        setIsEditing(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  if (!user) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Toaster position="top-right" />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <div className="card-body items-center text-center">
            <h2 className="text-3xl font-bold mb-4">My Profile</h2>

            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-32 h-32 rounded-full mb-4"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-gray-700">No Image</span>
              </div>
            )}

            <p className="text-lg font-semibold">Name: {user.displayName || 'Not Provided'}</p>
            <p className="text-lg font-semibold">Email: {user.email}</p>

            <button
              className="btn btn-neutral mt-6 w-full"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Cancel' : 'Update Profile'}
            </button>

            {isEditing && (
              <div className="w-full mt-4">
                <input
                  type="text"
                  className="input input-bordered w-full mb-2"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="input input-bordered w-full mb-2"
                  placeholder="Photo URL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
                <button
                  className="btn btn-primary w-full"
                  onClick={handleUpdateProfile}
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
