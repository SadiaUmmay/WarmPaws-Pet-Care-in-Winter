

import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { auth } from '../firebase/Firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { toast, Toaster } from 'react-hot-toast';

const PrivateRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                toast.error('You must login first!');
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <Toaster position="top-right" />
            {children}
        </>
    );
};

export default PrivateRoute;

