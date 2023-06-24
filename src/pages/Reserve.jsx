import React, { useEffect, useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { Form, FormGroup, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../styles/Reserve.css'

const Reserve = () => {
    const location = useLocation();
    const data = location.state?.data
    const date = location.state?.date
    const count = location.state?.count
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const user = useSelector(state => state.user)
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn.isLoggedIn) {
            navigate('/login')
        }
    }, [])

    //calculate the number of nights staying by finding the duration between check-in and check-out date
    let date_1 = new Date(date.checkInDate)
    let date_2 = new Date(date.checkOutDate);

    const numOfNights = (date_2.getTime() - date_1.getTime()) / (1000 * 3600 * 24)

    const [guest, setGuest] = useState({
        name: isLoggedIn.username,
        email: '',
        phone: null,
    })

    const [confirmed, setConfirmed] = useState(false)
    console.log(isLoggedIn)

    return (
        <div className="reserve--container">
            <div className={`reserve--reservationInputs ${confirmed ? 'none' : ''}`}>
                <h3>Reservation Details</h3>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={e => setGuest({
                            ...guest,
                            name: e.target.value
                        })} value={guest.name} type='text' placeholder='Enter your name' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={e => setGuest({
                            ...guest,
                            email: e.target.value
                        })} type='email' placeholder='Enter your email' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control onChange={e => setGuest({
                            ...guest,
                            phone: e.target.value
                        })} type='number' placeholder='Enter your phone number' />
                    </Form.Group>
                    <Button className='my-3' variant='primary' onClick={() => setConfirmed(true)}>Reserve</Button>
                </Form>
            </div>
            <div className={`reserve--bookingContainer ${confirmed ? 'none' : ''}`}>
                <div className="reserve--bookingDetails">
                    <h4>Booking Details</h4>
                    <p>{date?.checkInDate} - {date?.checkOutDate}</p>
                    <p>{data?.name}</p>
                    <p>{numOfNights} {numOfNights > 1? 'nights': 'night'}</p>
                </div>
                <hr />
                <div className="reserve--priceSummary">
                    <h4>Price Summary</h4>
                    <span>
                        <p>{data.room_type} ({count})</p>
                        <p>${data.price * count}</p>
                    </span>
                    <span>
                        <p>VAT</p>
                        <p>${(data.price * count * 0.12).toFixed(0)}</p>
                    </span>
                    <span>
                        <p>Cleaning Fee</p>
                        <p>${(data.price * count * 0.05).toFixed(0)}</p>
                    </span>
                </div>
                <hr />
                <div className="reserve--totalPrice">
                    <h4>Total</h4>
                    <h4>USD ${(data.price * count * 1.17).toFixed(0)}</h4>
                </div>
            </div>
            <div className={`reserve--reservationConfirmContainer ${confirmed ? '' : 'none'}`}>
                <h3>Reservation Confirmed!</h3>
                <hr />
                <div className="reserve--confirmGuestDetails">
                    <span>
                        <p>Guest</p>
                        <p>{guest.name}</p>
                    </span>
                    <span>
                        <p>Email</p>
                        <p>{guest.email}</p>
                    </span>
                    <span>
                        <p>Phone</p>
                        <p>{guest.phone}</p>
                    </span>
                </div>
                <hr />
                <div className="reserve--confirmLocation">
                    <span>
                        <p>Hotel</p>
                        <p>{data.name}</p>
                    </span>
                    <span>
                        <p>check-in</p>
                        <p>{date.checkInDate}</p>
                    </span>
                    <span>
                        <p>check-out</p>
                        <p>{date.checkOutDate}</p>
                    </span>
                </div>
                <Link to="/"><Button variant='primary'>Back to Home</Button></Link>
            </div>
        </div>
    )
}

export default Reserve