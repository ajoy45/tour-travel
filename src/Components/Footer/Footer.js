import React from 'react';
import './Footer.css';
import Row from 'react-bootstrap/Row';
import img from '../../images/logo/logo.png'
const Footer = () => {
    return (
        <footer className=' bg-dark'>
            <h1 className='text-center text-white p-3'>Tour <span className='text-primary'>Travel</span></h1>
            <Row xs={1} sm={3} md={3} lg={3}>

                <div className="upper1 text-white text-center">
                    <h1 className='p-3'>Package</h1>
                    <h5>HoneyMoon</h5>
                    <h5>Travel</h5>
                    <h5>Business Trip</h5>
                    <h5>Family Trip</h5>
                </div>
                <div className="upper2 text-white text-center">
                    <h1 className='p-3'>Destination</h1>
                    <h5>Paris</h5>
                    <h5>Spain</h5>
                    <h5>Nepal</h5>
                    <h5>Dubai</h5>
                </div>
                <div className="upper3 text-white text-center p-3">
                    <img src={img} alt="" />
                    <h3 className='pt-5'>Explore the world with us . Make us part of your enjoyment</h3>
                </div>

            </Row>
            <Row>
                <div className='footer-icon  text-center pt-5'>
                    <i class="fab fa-facebook-f text-primary  fs-4"></i>
                    <i class="fab fa-instagram text-danger ps-3 fs-4"></i>
                    <i class="fab fa-twitter text-primary ps-3 fs-4"></i>
                    <i class="far fa-envelope text-danger ps-3 fs-4"></i>
                </div>
                <div className='footer-text text-white text-center'>
                    <h6 className='pt-2'>Copyright @2022 | Tour Travel</h6>
                </div>
            </Row>
        </footer>
    );
};

export default Footer;