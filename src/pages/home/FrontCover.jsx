import React from 'react'
import '../../styles/FrontCover.css'
import { Form, FormGroup } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate, NavLink, Link } from 'react-router-dom'

const FrontCover = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState({
    location: 'none',
    checkInDate: 'none',
    checkOutDate: 'none'
  })

  return (
    <div className="frontCover--container">
      <div className="frontCover--box">
        <h3>Go on an adventure.</h3>
        <p>Choose where you stay and we'll take care of the rest!</p>
      </div>
      <div className="frontCover--containerB">
        <div className="frontCover--routes gt1024">
          <NavLink className='frontCover--links'><img src='/svg/building-solid.svg' />Hotels & Home</NavLink>
          <NavLink className='frontCover--links'><img src='/svg/house-solid.svg' />Private Stays</NavLink>
          <NavLink className='frontCover--links'><img src='/svg/hands-holding-solid.svg' />Flight + Hotel</NavLink>
          <NavLink className='frontCover--links'><img src='/svg/plane-departure-solid.svg' />Flights</NavLink>
        </div>
        <div className="frontCover--inputContainer">
          <select onChange={e => setLocation({
            ...location,
            location: e.target.value
          })} name='location'>
            <option>Choose your Destination</option>
            <option>Bangkok</option>
            <option>Korea</option>
            <option>Japan</option>
            <option>Taiwan</option>
          </select>
          <input onChange={e => setLocation({
            ...location,
            checkInDate: e.target.value
          })} className='inputs frontCover--date' type="date" name="checkInDate" id="checkInDate" />
          <input onChange={e => setLocation({
            ...location,
            checkOutDate: e.target.value
          })} className='inputs frontCover--date' type="date" name="checkOutDate" id="checkOutDate" />
          <Link state={{ data: location }} className={`inputs ${location.checkInDate === 'none' || location.checkOutDate === 'none' || location.location === 'none' ? 'disabled-links': ''}`} id='frontCoverSearch' to="/booking"><button disabled={location.checkInDate === 'none' || location.checkOutDate === 'none' || location.location === 'none' ? true : false}>Search</button></Link>
        </div>
      </div>
      <p className='frontCover--cancellationText'>Free Cancellation & Flexible Booking available</p>
    </div>
  )
}

export default FrontCover