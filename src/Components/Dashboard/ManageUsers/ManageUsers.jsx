import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import './ManageUsers.css'
import UseAxiosSecure from '../../../hooks/UseAxiosSecure/UseAxiosSecure';

const ManageUsers = () => {
    const [axiosSecure] = UseAxiosSecure()
    const {data: users = [], refetch} = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    console.log(users)
    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/users`)
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [])
    // console.log(users)
    const handleMakeAdmin = (user) => {
        fetch(`https://summer-school-camp-server-kazisolah114.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.modifiedCount) {
                refetch()
            }
        })
    }
    const handleMakeInstructor = (user) => {
        fetch(`https://summer-school-camp-server-kazisolah114.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount) {
                refetch()
            }
        })
    }
    
    return (
        <div className='manage-users'>
            <h2 className='text-2xl text-center mb-5'>Manage Users</h2>
            {/* <button>Button</button> */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className='bg-orange-500'>
                        <tr>
                            <th>#</th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <img className='user-img' src={user.photo} alt="" />
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role ? user.role : 'student'}
                                </td>
                                <td>
                                    {
                                    user.role == 'admin' 
                                    ? 
                                    <button onClick={() => handleMakeAdmin(user)} className='role-btn admin-role bg-[#3f51b5cc]' disabled={true}>Make Admin</button>
                                    :
                                    <button onClick={() => handleMakeAdmin(user)} className='role-btn admin-role bg-[#3f51b5]'>Make Admin</button>
                                    }
                                </td>
                                <td>
                                    {
                                    user.role == 'instructor'
                                    ?
                                    <button  onClick={() => handleMakeInstructor(user)} className='role-btn instructor-role bg-[#eb4539b8]' disabled={true}>Make Instructor</button>
                                    :
                                    <button  onClick={() => handleMakeInstructor(user)} className='role-btn instructor-role bg-[#f44336e0]'>Make Instructor</button>
                                    }
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;