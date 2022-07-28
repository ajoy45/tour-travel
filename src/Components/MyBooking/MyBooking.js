import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Roll } from 'react-reveal';
import auth from '../Firebase/Firebase.ini';

const MyBooking = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    const [mybooking, setmybooking] = useState([])
    let count = 1;
    useEffect(() => {
        fetch(`https://stark-beyond-03998.herokuapp.com/mybooking/${user?.email}`)
            .then(res => res.json())
            .then(data => setmybooking(data))
    }, [user?.email]);
    const handelToDelete = id => {
        const proced = window.confirm('are you sure to delete');
        if (proced) {
            const url = `https://stark-beyond-03998.herokuapp.com/booking/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaing = mybooking.filter(book => book._id !== id);
                    setmybooking(remaing)
                })
        }

    }
    return (
        <Roll Roll>
            <div className='container text-center'>
                <h1 className='text-center p-4 text-color fw-bold'>My Booking</h1>
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
                            mybooking.map(singleBook => <tr>
                                <td>{count++}</td>
                                <td>{singleBook.person_name}</td>
                                <td>{singleBook.email}</td>
                                <td>{singleBook.number}</td>
                                <td>{singleBook.address}</td>
                                <td>{singleBook.car_name}</td>
                                <td>{singleBook.selection}</td>
                                <button className='border-0' onClick={() => handelToDelete(singleBook._id)}>Delete</button>
                            </tr>)
                        }


                    </tbody>
                </Table>
            </div>
        </ Roll>

    );
};

export default MyBooking;