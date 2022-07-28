import React, { useEffect, useState } from 'react';
import './CarDetails.css';
import { useParams } from 'react-router';
import Booking from '../Booking/Booking';
const CarDetails = () => {
    const { id } = useParams();
    const [carData, setCardata] = useState({});

    useEffect(() => {
        fetch(`https://stark-beyond-03998.herokuapp.com/cars/${id}`)
            .then(res => res.json())
            .then(data => setCardata(data))
    }, [id])
    const { name, img, passengers, condition, daily_rent, monthly_rent } = carData;
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 pt-5'>
                    <img className='img-fluid' src={img} alt="" />
                    <p className="pt-4">
                        <span className="fw-bold">Vehicies detail:</span> {name}
                    </p>
                    <p>
                        <span className='fw-bold'>Number of passengers can take:</span>{passengers}
                    </p>
                    <p>
                        <span className='fw-bold'>Condition: </span>{condition}
                    </p>
                    <p>
                        <span className='fw-bold'>Daily Rent:</span>{daily_rent}
                    </p>
                    <p>
                        <span className='fw-bold'>Monthlu Rent:</span>{monthly_rent}
                    </p>

                </div>
                <div className='col-12 col-md-6 col-lg-6 pt-4'>
                    <Booking
                        carData={carData}
                    ></Booking>
                </div>

            </div>
        </div>
    );
};

export default CarDetails;