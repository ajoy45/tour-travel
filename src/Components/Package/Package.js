import React from 'react';
import './Package.css';
import img1 from '../../images/package/10.jpg';
import img2 from '../../images/package/7.jpg';
import img3 from '../../images/package/8.jpg';
import img4 from '../../images/package/11.jpg';
import { Rotate } from 'react-reveal';
const Package = () => {
    return (
        
        <div className='container mb-4 '>
            <Rotate top left >
            <h1 className='text-center p-4 fw-bold'>Travel <span className='text-color'>Package</span> </h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                <div className="col ">
                    <div className="card card-container ">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Family Trip</h5>
                            <p className="card-text">Price:$1400</p>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card card-container middle-part" >
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Business Trip</h5>
                            <p className="card-text">Price:$300</p>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card card-container">
                        <img src={img3} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">HoneyMoon Trip</h5>
                            <p className="card-text">Price:$850</p>
                        </div>
                    </div>
                </div>

            </div>
            </Rotate>
            
            <Rotate top left>
            <section className='discount-container'>
                <h1 className='fw-bold text-center p-5'>Flight <span className='text-color' >Discount</span></h1>
                <div className='  discount-part row'>
                    <div className="discount col-12 col-sm-12  col-md-6 col-lg-6">
                        <h1 className='text-white p-4'>Summer Mega Discount</h1>
                        <p className='text-white ms-4'>Explore the world with us . Make us part of your enjoyment</p>
                         <h5 className='text-white ms-4 '>Honeymoon : 10%</h5>
                         <h5 className='text-white ms-4'>Business Trip : 10%</h5>
                         <h5 className='text-white ms-4'>Family Trip : 15%</h5>
                    </div>
                    <div className="discount-img col-12 col-sm-12 col-md-6 col-lg-6">
                        <img width={400}  src={img4} alt="" />
                    </div>
                </div>
            </section>
            </Rotate>
            
            
        </div>
        
        
    );
};

export default Package;