import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Instructors.css'
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';
import { FaEnvelopeOpenText } from "react-icons/fa";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`https://summer-school-camp-server-kazisolah114.vercel.app/instructors`)
            .then(res => res.json())
            .then(data => {
                setUsers(data)

            })
    }, [])
    useEffect(() => {
        const findInstructors = users.filter(item => item.role == 'instructor');
        setInstructors(findInstructors)

    }, [users])

    console.log(instructors)

    // console.log(users)
    return (
        <div>
            <Header></Header>
            <div className="instructor-page py-16">
                <Container>
                    <h2 className='text-center text-3xl mb-5'>Our Instructors</h2>
                    <div className='instructor-items'>
                        {instructors.map(instructor => <div key={instructor._id}>
                            <div className="instructors">
                                <img src={instructor.photo} alt="" />
                                <div>
                                    <h4>{instructor.name}</h4>
                                    <h5><FaEnvelopeOpenText className='d-inline mr-1'></FaEnvelopeOpenText> {instructor.email}</h5>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Instructors;