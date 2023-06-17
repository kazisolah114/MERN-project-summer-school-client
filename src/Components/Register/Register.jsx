import React, { useContext, useState } from 'react';
import Header from '../../Home/Header/Header';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import { AuthContenxt } from '../../Provider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../config.firebase';
import Footer from '../../Home/Footer/Footer';
import SocialSignIn from '../SocialSignIn/SocialSignIn';


const Register = () => {
    const [error, setError] = useState("")
    // const [user, setUser] = useState([])
    const auth = getAuth(app)
    const { createUser } = useContext(AuthContenxt)
    const handleRegistration = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.password.value;
        const photo = form.photo.value;
        const result = { name, email, password, confirm, photo }
        // console.log(result)
        form.reset()
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                // setUser(user)
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        console.log(user)
                        const saveUser = { name: user.displayName, email: user.email, photo: user.photoURL }
                        
                        fetch('https://summer-school-camp-server-kazisolah114.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                               console.log(data)
                            })
                    })
                    .catch(err => { })
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage)
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

                    <h2>Register User</h2>
                    <form onSubmit={handleRegistration} action="" className='py-4'>
                        <input type="text" name="name" placeholder='Your Name' />
                        <input type="email" name="email" placeholder='Your Email' required />
                        <input type="password" name="password" placeholder='Your Password' required />
                        <input type="password" name="confirm" placeholder='Confirm Password' required />
                        <input type="text" name="photo" placeholder='Photo URL' />
                        <input type="submit" value="Register" />
                    </form>
                    <SocialSignIn></SocialSignIn>
                    <p className=''>Already a member?<Link to="/login" className=''>Login Here</Link></p>
                    
                </div>
                

            </Container>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Register;