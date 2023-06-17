import React, { useContext, useState } from 'react';
import Header from '../../Home/Header/Header';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import './Login.css'
import { AuthContenxt } from '../../Provider/AuthProvider';
import Footer from '../../Home/Footer/Footer';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

const Login = () => {
    const {signInUser} = useContext(AuthContenxt)
    // console.log(signInUser)
    const [error, setError] = useState("")
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const result = {email, password}
        // console.log(result)
        form.reset()
        signInUser(email, password)
        .then(res => {
            const signedUser = res.user;
            console.log(signedUser)
        })
        .catch(err => {
            const error = err.message;
            console.log(error)
            setError(error)
        })
    }
    return (
        <div>
            <Header></Header>
            <Container>
            <div className="errorMessage text-center pt-5">
                    <p className='text-danger'>{error}</p>
                </div>
                <div className="user-login">
                    <h2>User Login</h2>
                    <form onSubmit={handleSignIn} action="" className='py-4'>
                        <input type="email" name="email" placeholder='Your Email' />
                        <input type="password" name="password" placeholder='Your Password' />
                        <input type="submit" value="Login" />
                    </form>
                    <SocialSignIn></SocialSignIn>
                    <p className=''>Not a member?<Link to="/register" className=''>Register Here</Link></p>
                    
                </div>
            </Container>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Login;