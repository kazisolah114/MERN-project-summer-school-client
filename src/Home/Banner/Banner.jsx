import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     slidesToScroll: 1,
    //     accessibility: true
    // };

    return (
        <div>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                <div className='carousel-img'>
                    <img src="https://img.freepik.com/free-photo/professional-athlete-scores-touchdown-stadium-spotlight-generated-by-ai_188544-29712.jpg?w=1060&t=st=1686847460~exp=1686848060~hmac=611f3a01f0bd66d6a64e37f9cd99a293ce4aed4a8cca0a15c5b242f13d258aa8" alt="" />
                    <div className="carousel-text">
                        {/* <h2>Hello there</h2> */}
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='carousel-img'>
                    <img src="https://www.carlile.com.au/wp-content/uploads/2021/06/IMG_7525_R-web-opt_CROP.jpg" alt="" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='carousel-img'>
                    <img src="https://img.freepik.com/free-photo/tennis-ball-racket-shadow-green-grass-generated-by-ai_188544-10210.jpg?w=1060&t=st=1686847591~exp=1686848191~hmac=e6c214fb57a41e4e8fb5dd8a6e12c4a222e1378f31f53a8bda41ea6d965b27d3" alt="" />
                </div>
                </SwiperSlide>
                
            </Swiper>
            {/* <Slider className='banner-carousel' {...settings}>
                <div>
                    <img src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=1060&t=st=1686300170~exp=1686300770~hmac=9a9d377e7273e771f87e91ecfff75ed1fb5bd62e44ebb41298962dac539e1381" alt="" />
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/gradient-national-sports-day-illustration_23-2148995776.jpg?w=996&t=st=1686300144~exp=1686300744~hmac=72b0f6f69508a2090dca1bfac4b8010f2272d466838dc7476b5e2750d34196ee" alt="" />
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/happy-children-enjoying-their-gym-class_23-2149070702.jpg?w=996&t=st=1686300223~exp=1686300823~hmac=9452616d8d5e609e83013e09bda7dade5b2529b464bed78fe923f00d4035d0da" alt="" />
                </div>
                

            </Slider> */}
        </div>
    );
};

export default Banner;