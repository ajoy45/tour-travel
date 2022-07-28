import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Car from '../Car/Car';
import './Cars.css'
const Cars = () => {
    const [cars, setrCars] = useState([])
    useEffect(() => {
        fetch('https://stark-beyond-03998.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setrCars(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center p-4 service'>Our Car Service</h1>
            <hr className='horiz-Bar'></hr>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    cars.map(car => <Car
                        key={car._id}
                        car={car}
                    ></Car>)
                }

            </Row>
        </div>
    );
};

export default Cars;