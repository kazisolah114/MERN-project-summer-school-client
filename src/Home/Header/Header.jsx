import { Button } from 'bootstrap';
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
import { AuthContenxt } from '../../Provider/AuthProvider';
import useAdmin from '../../hooks/UseAdmin/UseAdmin';
import useInstructor from '../../hooks/UseInstructor/UseInstructor';
import UseStudent from '../../hooks/UseStudent/UseStudent';


const Header = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = UseStudent()
    const { profile, logOutUser } = useContext(AuthContenxt)
    // console.log(profile)
    const handleLogOut = event => {
        logOutUser()
            .then(res => { })
            .catch(err => { })
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark" className='header'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='header-logo' src="https://sportsacademy.us/wp-content/uploads/2020/06/SA_Logo_Primary_white.png" alt="" />
                    </Navbar.Brand>
                    <Nav className="mr-auto header-menu">
                        <Link to="/">Home</Link>
                        <Link to="/instructors">Instructors</Link>
                        <Link to="/classes">Classes</Link>
                        {profile ?
                            <>
                            {isAdmin
                            ?<Link to="/dashboard/manageclasses">Dashboard</Link>
                            :
                            isInstructor
                            ?<Link to="/dashboard/addclass">Dashboard</Link>
                            :
                            isStudent
                            ?
                            <Link to="/dashboard/selectedclasses">Dashboard</Link>
                            :
                            ""
                            }
                            </>
                            :
                            ""
                        }
                        <div className='ms-5'>
                            {profile ?
                                <div className='d-flex gap-2 align-items-center'>
                                    <img src={profile.photoURL} alt="" />
                                    <Link onClick={handleLogOut} className=' main-btn logout-btn'>Logout</Link>
                                </div>
                                :
                                <Link to="/login" className='main-btn'>Login</Link>
                            }
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;