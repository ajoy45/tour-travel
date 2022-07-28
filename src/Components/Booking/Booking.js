import React, { useState } from 'react';
import './Booking.css';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../Firebase/Firebase.ini'
const Booking = ({ carData }) => {
    const [user] = useAuthState(auth);
    const [myName, setMyName] = useState('')
    const [email1, setEmail] = useState('')
    const [number1, setNumber] = useState('')
    const [selection1, setSelection] = useState('')
    const [address1, setAddress] = useState('')
    // console.log(myName,email,number,selection,address)
    const { name } = carData;
    const newData = {
        person_name: myName,
        email: email1,
        number: number1,
        selection: selection1,
        address: address1,
        car_name: name
    };
    const handelSubmit = event => {
        event.preventDefault()
        setMyName(event.target.name.value)
        setEmail(event.target.email.value)
        setNumber(event.target.number.value)
        setSelection(event.target.selection.value)
        setAddress(event.target.address.value)



        const url = 'https://stark-beyond-03998.herokuapp.com/booking';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Booking Processed Successfully");
                    event.target.reset();
                }
            });

    }
    return (
        <div>
            <h1 className='text-center'>Booking Here</h1>
            <form onSubmit={handelSubmit} className='form_style'>
                <input name='name' type="text" placeholder='Enter Your Name' />
                <br></br>
                <input type="email" name="email" id="" placeholder='Email' defaultValue={user?.email} />
                <br></br>
                <input name='number' type="text" placeholder='Enter Your Phone Number' />
                <br></br>
                <select name='selection'>
                    <option value="Rent Type">Rent Type</option>
                    <option value="Daily">Daily</option>
                    <option value="Monthly">Monthly</option>
                </select>
                <br></br>
                <input name='address' type="text" placeholder='Enter Your Address' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Booking;