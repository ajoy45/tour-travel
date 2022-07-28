import React, { useEffect, useState } from 'react';
import './AllBooking.css';
import Table from 'react-bootstrap/Table';
import { Roll } from 'react-reveal';
const AllBooking = () => {
    const[allbooking,setAllbooking]=useState([])
    let count=1;
    useEffect(()=>{
        fetch('http://localhost:5000/booking')
        .then(res=>res.json())
        .then(data=>setAllbooking(data))
    },[]);
    const handelToDelete=id=>{
        const proced=window.confirm('are you sure to delete');
        if(proced){
            const url=`http://localhost:5000/booking/${id}`;
            fetch(url,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                const remaing=allbooking.filter(book=>book._id !==id);
                setAllbooking(remaing)
            })
        }
        
    }
    return (
        <Roll left>
          <div className='container text-center'>
            <h1 className='text-center p-4 text-color fw-bold'>All Booking</h1>
            <Table striped bordered hover responsive>
                <thead>
                <tr className="text-center">
                  <th scope="col">Serial</th>
                  <th scope="col">Name</th>
                  <th scope="co">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Address</th>
                  <th scope="col">Car Name</th>
                  <th scope="col">Rent Type</th>
                  <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                    {
                        allbooking.map(singleBook=><tr>
                            <td>{count++}</td>
                            <td>{singleBook.person_name}</td>
                            <td>{singleBook.email}</td>
                            <td>{singleBook.number}</td>
                            <td>{singleBook.address}</td>
                            <td>{singleBook.car_name}</td>
                            <td>{singleBook.selection}</td>
                            <button className='border-0' onClick={()=>handelToDelete(singleBook._id)}>Delete</button>
                        </tr>)
                    }
                   
                    
                </tbody>
            </Table>
        </div>
        </Roll>
        
    );
};

export default AllBooking;