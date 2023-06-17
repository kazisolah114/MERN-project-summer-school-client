import React, { createContext, useState, useEffect } from 'react';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../config.firebase';
import axios from 'axios';

const auth = getAuth(app)
export const AuthContenxt = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [profile, setProfile] = useState({})
    const [user, setUser] = useState([])
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            // console.log(loggedInUser)
            setProfile(loggedInUser)

            // set and get jwt token
            if (loggedInUser) {
                axios.post('https://summer-school-camp-server-kazisolah114.vercel.app/jwt', { email: loggedInUser.email })
                    .then(data => {
                        // console.log(data)
                        setUser(data)
                        localStorage.setItem('access-token', data.data.token)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
        })
        return () => {
            return unsubscribe;
        }
    }, [])

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    const authInfo = {
        profile,
        user,
        createUser,
        signInUser,
        logOutUser,
        signInWithGoogle
    }
    return (
        <AuthContenxt.Provider value={authInfo}>
            {children}
        </AuthContenxt.Provider>
    );
};

export default AuthProvider;