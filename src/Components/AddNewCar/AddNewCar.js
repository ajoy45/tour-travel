import React, { useState } from 'react';
import { Roll } from 'react-reveal';
import img1 from '../../images/contact/13.jpg'
import './AddNewCar.css'
const AddNewCar = () => {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [passenger, setPassenger] = useState('');
    const [condition, setCondition] = useState('');
    const [daily, setDaily] = useState('');
    const [monthly, setMonthly] = useState('');

    const handelAddToCar = (event) => {

        event.preventDefault()
        setName(event.target.name.value)
        setImg(event.target.img.value)
        setPassenger(event.target.passenger.value)
        setCondition(event.target.condition.value)
        setDaily(event.target.daily.value)
        setMonthly(event.target.monthly.value)
        const data = {
            img: img,
            name: name,
            passengers: passenger,
            condition: condition,
            daily_rent: daily,
            monthly_rent: monthly
        }
        const url = 'https://stark-beyond-03998.herokuapp.com/cars';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        event.reset()
    }
    return (
        <Roll left>
            <div className='container mt-5 mb-5'>
                <div className="row">
                    <div className='add_car col-12 col-md-6 '>
                        <img className='img-fluid mt-5' src={img1} alt="" />
                    </div>
                    <div className='add_car_form col-12 col-md-6  text-center'>
                        <h1 className='text-center text-color fw-bold'>Add Car</h1>
                        <form onSubmit={handelAddToCar}>
                            <input className='w-100 p-2 mb-4' type="text" placeholder='Car Name' name='name' /><br></br>
                            <input className='w-100 p-2 mb-4' type="text" placeholder='Image url' name='img' /><br></br>
                            <input className='w-100 p-2 mb-4' type="number" placeholder='Enter Total Passengers Number' name='passenger' /><br></br>
                            <input className='w-100 p-2 mb-4' type="text" placeholder='Enter Car Condition Details' name='condition' /><br></br>
                            <input className='w-100 p-2 mb-4' type="text" placeholder='Enter Car Daily Rent Details' name='daily' /><br></br>
                            <input className='w-100 p-2 mb-4' type="text" placeholder='Enter Car Monthly Rent Details' name='monthly' /> <br></br>
                            <input className='p-1 mb-3 btn btn-primary w-50' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </Roll>

    );
};

export default AddNewCar;