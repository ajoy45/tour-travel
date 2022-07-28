import React from 'react';
import './Baner.css';
import Fade from 'react-reveal/Fade';
const Baner = () => {
    return (
        <div className='baner-container img-fluid'>

           <Fade left>
           <div className='w-100 ps-5 container-md'>
                <h3 className='fw-bold'>Book Your Tour Best Price</h3>
                <p className='fw-bold fs-4'>
                    <i className="fas fa-dollar-sign text-primary px-2"></i> Best Price
                    Guaranteed
                </p>
                <p className='fw-bold fs-4'>
                <i class="fas fa-house-user text-primary px-1"></i> Home Pick Ups
                </p>
                <p className='fw-bold fs-4'>
                <i class="fas fa-book-reader text-primary px-1"></i> Easy Bookings For Tour
                </p>
                <p className='fw-bold fs-4'>
                <i class="fas fa-clock text-primary px-1 "></i> 24/7 Customer Care
                </p>
            </div>
           </Fade>


        </div>
    );
};

export default Baner;