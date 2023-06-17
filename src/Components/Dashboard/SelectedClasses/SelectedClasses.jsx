import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContenxt } from '../../../Provider/AuthProvider';

const SelectedClasses = () => {
    const { profile } = useContext(AuthContenxt)

    const { data: selectedclass = [], refetch } = useQuery(['selectedClass'], async () => {
        const res = await fetch('https://summer-school-camp-server-kazisolah114.vercel.app/selectedclass')
        return res.json()
    })


    const handleDeleteClass = async (item) => {

        fetch(`https://summer-school-camp-server-kazisolah114.vercel.app/selectedclass/${item._id}`, {
            method: 'DELETE',

        });
        if (item) {
            refetch()
        }


    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Image</th>
                            <th>Course Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Price</th>
                            <th>Purchase Now</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedclass.map((item, index) => <tr item={item._id}>
                            <td>{index + 1}</td>
                            <td>
                                <img className='class-img' src={item.course_img} alt="" />
                            </td>
                            <td>{item.course_name}</td>
                            <td>{item.instructor_name}</td>
                            <td>{item.instructor_email}</td>
                            <td>${item.price}</td>
                            <td>
                                <button className='payment-button'>PAY</button>
                            </td>
                            <td>
                                <button onClick={() => handleDeleteClass(item)} className='delete-button'><FaTrashAlt className='d-inline'></FaTrashAlt></button>
                            </td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;