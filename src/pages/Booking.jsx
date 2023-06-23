import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/Booking.css";
import hotelData from '../data/hotelData'


const Booking = () => {
  const location = useLocation();
  const data = location.state?.data;

  //calculate the number of nights staying by finding the duration between check-in and check-out date
  let date_1 = new Date(data.checkInDate)
  let date_2 = new Date(data.checkOutDate);

  const numOfNights = (date_2.getTime() - date_1.getTime()) / (1000 * 3600 * 24)


  //filter room
  const [filterRoom, setFilterRoom] = useState([])

  const filterHandler = (e) => {
    if (e.target.checked) {
      setFilterRoom([...filterRoom, e.target.value])
    } else {
      setFilterRoom(
        filterRoom.filter(item => item !== e.target.value)
      )
    }
  }

  const roomTypeList = ['Deluxe Double Room', 'Standard Double Room', 'Twin Bed Room']

  const checkBoxes = roomTypeList.map(room => (
    <label htmlFor={room}>
      <input className="booking--checkBoxInput" onChange={filterHandler} type="checkbox" name={room} id={room} value={room} />
      <span className="booking--roomTypeText">{room}</span>
    </label>
  ))


  //display location
  const displayLocation = (
    <div className="booking--location">
      <span>{data.location}</span>
      <span>{data.checkInDate}</span>
      <span>{data.checkOutDate}</span>
      <span>{numOfNights} {numOfNights <= 1 ? 'night' : 'nights'}</span>
    </div>
  )

  //render star ratings
  const renderStars = (num) => {
    const stars = []
    for (let i = 0; i < num; i++) {
      stars.push('/svg/star-solid.svg')
    }
    const displayStarRating = stars.map(star => (
      <img className='solidStar' src={star}></img>
    ))
    return displayStarRating
  }

  //display hotel
  const findHotel = hotelData.find(item => item.location === data.location)?.hotels

  const displayHotel = findHotel
    ?.filter((hotel) =>
      filterRoom.length === 0 || filterRoom.includes(hotel.room_type)
    )
    .map((hotel, index) => (
      <>
        <Link to={`/hotel/${hotel.name}`} state={{ data: hotel, date: data }} key={index} className="booking--hotelCard">
          <img src={hotel.imageURL} alt="" />
          <div className="booking--context">
            <div className="booking--contextLeft">
              <div className="booking--contextLocation">
                <p>{hotel.city}, {hotel.province}</p>
                <h4>{hotel.name}</h4>
              </div>
              <div className="booking--contextRoom">
                <p>{hotel.room_type}</p>
              </div>
              <div className="booking--features">
                {hotel.features.map((feature, index) => (
                  <span key={index}>{feature}</span>
                ))}
              </div>
            </div>
            <div className="booking--contextRight">
              <div className="booking--contextRating">
                <span>{renderStars(hotel.rating)}</span>
                <p>({hotel.reviews})</p>
              </div>
              <div className="booking--contextPrice">
                <p>per night</p>
                <span>USD $ {hotel.price}</span>
              </div>
            </div>
          </div>
        </Link>
        <hr className="booking--breakLine" />
      </>
    ))

  return (
    <div className="booking--container">
      {displayLocation}
      <div className="booking--hotelCardContainer">
        <div className="booking--filterContainer">
          <h4>Room Type</h4>
          {checkBoxes}
        </div>
        <div className="booking--hotelList">
          {displayHotel}
        </div>
      </div>
    </div>
  );
};

export default Booking;
