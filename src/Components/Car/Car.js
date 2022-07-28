import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Zoom } from 'react-reveal';
import { useNavigate } from "react-router-dom";
import './Car.css'
const Car = ({ car }) => {
    const { _id, img, name, daily_rent } = car;
    const navigate = useNavigate();
    const handelcarDetails=id=>{
        navigate(`/carDetails/${id}`)
    }
    return (
        <Zoom bottom>
            <div>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {daily_rent}
                            </Card.Text>
                        </Card.Body>
                        <button onClick={()=>handelcarDetails(_id)} className='card-btn'>Booking <i className="fas fa-arrow-right ps-2 icon"></i></button>
                        
                    </Card>
                </Col>
            </div>
        </Zoom>

    );
};

export default Car;