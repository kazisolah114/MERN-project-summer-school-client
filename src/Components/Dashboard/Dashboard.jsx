import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Home/Header/Header';
import './Dashboard.css'
import useAdmin from '../../hooks/UseAdmin/UseAdmin';
import useInstructor from '../../hooks/UseInstructor/UseInstructor';
import UseStudent from '../../hooks/UseStudent/UseStudent';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    // console.log(isAdmin)
    const [isInstructor] = useInstructor();
    // console.log(isInstructor)
    const [isStudent] = UseStudent()
    // console.log(isStudent)
    return (
        <div>
            {/* <Header></Header> */}
            <Container>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side dashboard-drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 rounded-md w-80 dashboard-side bg-[#0B847A] text-base-content">
                            {/* Sidebar content here */}


                            {isAdmin ?
                                <>
                                    <h2 className='text-2xl'>Admin Dashboard</h2>
                                    <li><Link to="/dashboard/manageclasses">Manage Classes</Link></li>
                                    <li><Link to="/dashboard/manageusers">Manage Users</Link></li>
                                    <hr className='my-2' />
                                    <li><Link to="/">Home</Link></li>
                                </>
                                :
                                isInstructor ?
                                <>
                                    <h2 className='text-2xl'>Instructors Dashboard</h2>
                                    <li><Link to="/dashboard/addclass">Add Class</Link></li>
                                    <li><Link to="/dashboard/myclasses">My Classes</Link></li>
                                    <hr className='my-2' />
                                    <li><Link to="/">Home</Link></li>
                                </>
                                :
                                isStudent ?
                                <>
                                    <h2 className='text-2xl'>Student Dashboard</h2>
                                    <li><Link to="/dashboard/selectedclasses">My Selected Classes</Link></li>
                                    <li><Link to="/dashboard/enrolledclasses">Enrolled Classes</Link></li>
                                    <hr className='my-2' />
                                    <li><Link to="/">Home</Link></li>
                                </>
                                :
                                ""
                                }



                        </ul>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Dashboard;