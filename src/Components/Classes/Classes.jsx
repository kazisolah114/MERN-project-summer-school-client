import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Classes.css'
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';
import { useContext } from 'react';
import { AuthContenxt } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Classes = () => {
    const { profile } = useContext(AuthContenxt)
    const navigate = useNavigate()
    // console.log(profile)
    const [classes, setClasses] = useState([])
    const [approved, setApproved] = useState([])


    const [axiosSecure] = UseAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    console.log(users)
    if (users.some(user => user.role === 'admin' || user.role === 'instructor')) {
        console.log('button should be dsiabled')
    } else {
        console.log('button should not be disabled')
    }



    useEffect(() => {
        fetch('https://summer-school-camp-server-kazisolah114.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))

    }, []);
    useEffect(() => {
        const filterApproved = classes.filter(item => item.status == 'approved');
        setApproved(filterApproved)
    }, [classes])


    const handleClassSelect = (item) => {
        console.log(item)
        if (profile) {
            const courseItem = { userId: profile.email, course_img: item.cimage, course_name: item.cname, instructor_name: item.insname, instructor_email: item.insemail, price: item.price }
            fetch(`https://summer-school-camp-server-kazisolah114.vercel.app/selectedclass`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(courseItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'The course has been added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'You Are Not Logged In!',
                text: "Login first to buy a course🤩",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                // confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            })
        }
    }

    return (
        <div>
            <Header></Header>
            <div className="classes-section py-16">
                <h2 className='text-center text-3xl mb-5'>Courses</h2>
                <Container>
                    <div className="classes-cards">
                        {
                            approved.map(item => <div key={item._id} className={item.seats == 0 ? 'class-item bg-[#8f0000]' : 'class-item'}>
                                <div className="classes-img">
                                    <img src={item.cimage} alt="" />
                                </div>
                                <div className="class">
                                    <h2>Course: <span>{item.cname}</span></h2>
                                    <p className=''>Instructor: <span>{item.insname}</span></p>
                                    <p>Available Seats: <span>{item.seats}</span></p>
                                    <p>Price: <span>${item.price}</span></p>


                                    <div>
                                        {users.some(user => user.role === 'admin' || user.role === 'instructor') ? 
                                        <>
                                            <button disabled={true} className="cls-btn bg-[#3b652ff1]">Select</button>
                                        </>
                                        :
                                        <>
                                            {item.seats == 0 ?
                                            <button disabled={true} className="cls-btn bg-[#3b652ff1]">Select</button>
                                            :
                                            <button onClick={() => handleClassSelect(item)} className="cls-btn bg-[#5a9947]">Select
                                            </button>
                                            }
                                            
                                        </>
                                        }
                                    </div>


                                    {/* {item.seats == 0 ?
                                        <button disabled={true} className="cls-btn bg-[#3b652ff1]">Select</button>
                                        :
                                        <button onClick={() => handleClassSelect(item)} className="cls-btn bg-[#5a9947]">Select
                                        </button>
                                    } */}

                                </div>
                            </div>
                            )
                        }
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Classes;