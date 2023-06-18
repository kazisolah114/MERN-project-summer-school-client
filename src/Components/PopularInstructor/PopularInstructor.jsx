import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const PopularInstructor = () => {
    const [users, setUsers] = useState([])
    const [instructors, setInstructors] = useState([])
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
    // console.log(instructors)
    return (
        <Container className='py-5'>
            <h2 className='text-center text-3xl mb-5'>Our Popular Instructors</h2>
            <div className='instructor-items'>
                        {instructors.slice(0, 6).map(instructor => <div key={instructor._id}>
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
    );
};

export default PopularInstructor;