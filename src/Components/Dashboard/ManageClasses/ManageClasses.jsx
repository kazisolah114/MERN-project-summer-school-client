import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageClasses.css'
import FeedbackModa from '../FeedbackModal/FeedbackModa';
import { useQuery } from '@tanstack/react-query';


const ManageClasses = () => {
    const {data: classes = [], refetch} = useQuery(['classes'], async () => {
        const res = await fetch('https://summer-school-camp-server-kazisolah114.vercel.app/classes')
        return res.json()
    })
    
    const handleStatusApprove = (cls) => {
        console.log(cls)
        fetch(`https://summer-school-camp-server-kazisolah114.vercel.app/classes/approve/${cls._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount) {
                    refetch()
                }
            })
    }
    const handleStatusDeny = (cls) => {
        console.log(cls)
        fetch(`https://summer-school-camp-server-kazisolah114.vercel.app/classes/deny/${cls._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount) {
                    refetch()
                }
            })
    }
    const handleFeedback = (cls) => {
        fetch(`https://summer-school-camp-server-kazisolah114.vercel.app/classes/feedback/${cls._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    // console.log(classes)
    return (
        <div className='manage-classes'>
            <h2 className='text-2xl text-center mb-5'>Manage Classes</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra classes-table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((cls, index) => (
                            <tr key={cls._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <img className='class-img' src={cls.cimage} alt="" />
                                </td>
                                <td>{cls.cname}</td>
                                <td>{cls.insname}</td>
                                <td>{cls.insemail}</td>
                                <td>{cls.seats}</td>
                                <td>${cls.price}</td>
                                <td>{cls.status}</td>
                                <td>
                                    {
                                        cls.status == 'approved' || cls.status == 'denied'
                                            ?
                                            <button className='button approve-button bg-[#28a746c5]' disabled={true} onClick={() => handleStatusApprove(cls)}>Approve</button>
                                            :
                                            <button className='button approve-button bg-[#28a745]' onClick={() => handleStatusApprove(cls)}>Approve</button>
                                    }
                                </td>
                                <td>
                                    {
                                        cls.status == 'denied' || cls.status == 'approved'
                                            ?
                                            <button className='button deny-button bg-[#dc3546c5]' disabled={true} onClick={() => handleStatusDeny(cls)}>Deny</button>
                                            :
                                            <button className='button deny-button bg-[#dc3545]'  onClick={() => handleStatusDeny(cls)}>Deny</button>
                                    }
                                </td>
                                <td>
                                    <Link onClick={() => handleFeedback(cls)} to={`/dashboard/${cls._id}`} className="button send-feedback-button">Feedback</Link>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;