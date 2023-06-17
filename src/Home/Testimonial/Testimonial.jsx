import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Container from 'react-bootstrap/esm/Container';
import { FaQuoteLeft } from "react-icons/fa";
import './Testimonial.css'

const Testimonial = () => {
    return (
        <Container className='py-5'>
            <h2 className='text-center text-3xl mb-5'>What Client Says</h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="testimonials">
                        {/* <button>Button</button> */}
                        <span><FaQuoteLeft></FaQuoteLeft></span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, dolorem?</p>
                        <div className='client-info d-flex align-items-center gap-2'>
                            <img src="https://i.pinimg.com/474x/38/50/7e/38507edd2df178149cbf1cb444ea198c--brendon-mccullum-cricket.jpg" alt="" />
                            <div>
                                <h6>Brandon McCullum</h6>
                                <p>Coach, NZ Cricket</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="testimonials">
                        <span><FaQuoteLeft></FaQuoteLeft></span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, dolorem?</p>
                        <div className='client-info d-flex align-items-center gap-2'>
                            <img src="https://i.pinimg.com/474x/38/50/7e/38507edd2df178149cbf1cb444ea198c--brendon-mccullum-cricket.jpg" alt="" />
                            <div>
                                <h6>Brandon McCullum</h6>
                                <p>Coach, NZ Cricket</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide><div className="testimonials">
                        <span><FaQuoteLeft></FaQuoteLeft></span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, dolorem?</p>
                        <div className='client-info d-flex align-items-center gap-2'>
                            <img src="https://i.pinimg.com/474x/38/50/7e/38507edd2df178149cbf1cb444ea198c--brendon-mccullum-cricket.jpg" alt="" />
                            <div>
                                <h6>Brandon McCullum</h6>
                                <p>Coach, NZ Cricket</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide><div className="testimonials">
                        <span><FaQuoteLeft></FaQuoteLeft></span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, dolorem?</p>
                        <div className='client-info d-flex align-items-center gap-2'>
                            <img src="https://i.pinimg.com/474x/38/50/7e/38507edd2df178149cbf1cb444ea198c--brendon-mccullum-cricket.jpg" alt="" />
                            <div>
                                <h6>Brandon McCullum</h6>
                                <p>Coach, NZ Cricket</p>
                            </div>
                        </div>
                    </div></SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Testimonial;