import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MyClasses.css'

const MyClasses = () => {

    const [classes, setClasses] = useState([]);
    const [myClasses, setMyClasses] = useState([]);

    useEffect(() => {
        fetch(`https://summer-school-camp-server-kazisolah114.vercel.app/classes`)
            .then(res => res.json())
            .then(data => setClasses(data))
            .catch(error => console.error('Error:', error));
    }, []);

    useEffect(() => {
        if (classes.length > 0) {
            const classPromises = classes.map(classObj =>
                fetch(`https://summer-school-camp-server-kazisolah114.vercel.app/classes/${classObj._id}`)
                    .then(res => res.json())
            );

            Promise.all(classPromises)
                .then(classData => setMyClasses(classData))
                .catch(error => console.error('Error:', error));
        }
    }, [classes]);

    console.log(classes);
    console.log(myClasses);



    // const [classes, setClasses] = useState([]);
    // const [myClasses, setMyClasses] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/classes`)
    //         .then(res => res.json())
    //         .then(data => setClasses(data))

    // }, []);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/classes/${classes._id}`)
    //     .then(res => res.json())
    //     .then(data => setMyClasses(data))
    // }, [])
    // console.log(myClasses)

    return (
        <div>
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
                            <th>Students</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myClasses.map((cls, index) => (
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
                                <td>{0}</td>
                                <td></td>
                                <td><Link to="" className='update-btn'>Update</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;