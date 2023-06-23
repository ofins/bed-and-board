import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import '../styles/Hotel.css'
import { useState } from 'react'


const Hotel = () => {
    const location = useLocation();
    const data = location.state?.data;
    const date = location.state?.date;
    const [count, setCount] = useState(0)

    //calculate the number of nights staying by finding the duration between check-in and check-out date
    let date_1 = new Date(date.checkInDate)
    let date_2 = new Date(date.checkOutDate);

    const numOfNights = (date_2.getTime() - date_1.getTime()) / (1000 * 3600 * 24)


    //render stars
    const stars = []
    const renderStars = () => {
        for (let i = 0; i < data.rating; i++) {
            stars.push('/svg/star-solid.svg')
        }
        return stars
    }
    renderStars()

    const displayStarRating = stars.map(star => (
        <img className='solidStar' src={star}></img>
    ))

    return (
        <div className="hotel--container">
            <img src={data.imageURL} alt="" />
            <div className="hotel--dateContainer">
                <p>{date.location}</p>
                <div className="hotel--dateBox">
                    <p>{date.checkInDate}</p>
                    <p>{date.checkOutDate}</p>
                </div>
            </div>
            <div className="hotel--context">
                <div className='hotel--title'>
                    <h3>{data.name}</h3>
                    {displayStarRating}
                </div>
                <p className='hotel--contextLocation'>{data.city}, {data.province}</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem hic aperiam debitis. Nemo hic labore enim voluptates aliquam laborum voluptate pariatur illo natus recusandae omnis aspernatur minus officiis odit commodi, reiciendis, neque expedita nam, animi accusamus vero dolore impedit? Neque aliquid earum, ad vitae tempora eveniet itaque dolor beatae id.</p>
            </div>
            <div className="hotel--selectRoom">
                <h3>Select your room</h3>
                <div className="hotel--roomCard">
                    <img src={data.room_image} alt="room image" />
                    <p>{data.room_type}</p>
                    <span>USD ${data.price}</span>
                    <div className="hotel--roomCounter">
                        <button disabled={count === 0 ? true : false} onClick={() => setCount(prev => prev - 1)}>-</button>
                        {count}
                        <button onClick={() => setCount(prev => prev + 1)}>+</button>
                    </div>
                </div>
            </div>
            <div className={`hotel--reservation ${count === 0 ? 'hidden' : ''}`}>
                <div className="hotel--reservationContext">
                    <p>{count} {count > 1 ? 'rooms' : 'room'}</p>
                    <p>{numOfNights} nights</p>
                    <p>${data.price * count} USD</p>
                </div>
                <div className="hotel--reservationButtons">
                    <button onClick={() => setCount(0)} id='reservationCancel'>Cancel</button>
                    <Link state={{ data: data, date: date, count:count }} to="/reserve"><button id='reservationReserve'>Reserve</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Hotel