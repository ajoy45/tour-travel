import React from 'react';
import'./ContactUs.css';
import emailjs from '@emailjs/browser';
import img from '../../images/contact/12.jpg';
import { toast } from 'react-toastify';
import Row from 'react-bootstrap/Row';
import { Roll } from 'react-reveal';
const ContactUs = () => {
    
    const handelSubmit=event=>{
        event.preventDefault();
        emailjs.sendForm('service_l0n3bfu', 'template_ef4rw7g', event.target, 'AcSivzwbTn901DiIs')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
      
      event.target.reset();
    }
    const notify = () => toast("successfuly submit");
    return (
        <Roll left>
            <div className='container  row'>
            
            <div className='contact-img col-md-6 col-12'>
                <img  src={img} alt="" />
            </div>
            <div className='contact-form  col-md-6 col-12'>
                <form onSubmit={handelSubmit} >
                    <h1 className='text-center p-3 text-color'>Contact Us</h1>
                    <hr className='horizontal'></hr>
                    <label className='fs-4 text-color fw-bold'>Message</label>
                    <textarea name="message" placeholder='Type Message'></textarea><br></br>
                    <label className='fs-4 text-color fw-bold'>Email</label>
                    <input type="email" name="email" placeholder='Email' /><br></br>
                    <input onClick={notify} type="submit" value="Submit" />
                </form>
            </div>
            
        </div>
        </Roll>
        
    );
};

export default ContactUs;