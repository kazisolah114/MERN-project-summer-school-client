
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-details py-5">
                <Container>
                <Row>
                    <Col>
                        <img className='w-50' src="https://sportsacademy.us/wp-content/uploads/2020/06/SA_Logo_Primary_white.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur laboriosam itaque veniam reiciendis amet conset add elit tentur itaque</p>
                    </Col>
                    <Col>
                        <h5>LEGAL</h5>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Help Center</a></li>
                        </ul>
                    </Col>
                    <Col>
                    <h5>DETAILS</h5>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Media & Brand</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Sponsors</a></li>
                        </ul>
                    </Col>
                    <Col>
                    <h5>CONTACT</h5>
                    <p>West Entrance 5650 Bollettieri Blvd. Bradenton, FL 34210</p>
                    <p>East Entrance 5500 34th St. W Bradenton, FL 34210</p>
                    <a tel="18008721234">1-800-872-1234</a>
                    <br />
                    <a href="">info@academy.com</a>
                    </Col>
                </Row>
                </Container>
            </div>
            <div className='footer-rights text-center'>
                <p className='mb-0'>&copy; All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;