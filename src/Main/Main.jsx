import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Home/Header/Header';
import Banner from '../Home/Banner/Banner';
import Testimonial from '../Home/Testimonial/Testimonial';
import Footer from '../Home/Footer/Footer';
import PopularClasses from '../Home/PopularClasses/PopularClasses';
import PopularInstructor from '../Components/PopularInstructor/PopularInstructor';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Main;