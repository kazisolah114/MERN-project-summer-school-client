import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContenxt } from '../../Provider/AuthProvider';

const SocialSignIn = () => {
    const { signInWithGoogle } = useContext(AuthContenxt)
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <div className='bg-[#E5E9EA] text-center w-50 mx-auto p-1 rounded-sm mb-3'>
            <button onClick={handleGoogleSignIn} className=''><span><FaGoogle className='d-inline mr-2 text-white'></FaGoogle></span>Sign In With Google</button>
        </div>
    );
};

export default SocialSignIn;