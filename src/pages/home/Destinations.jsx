import React from 'react'
import '../../styles/Destinations.css'
import { Link } from 'react-router-dom'

const Destinations = () => {

  const places = [
    {
      country: 'Japan',
      city: 'Osaka',
      imageURL: '/images/osaka.jpg'
    },
    {
      country: 'Thailand',
      city: 'Bangkok',
      imageURL: '/images/bangkok.jpg'
    },
    {
      country: 'Malaysia',
      city: 'Penang',
      imageURL: '/images/penang.jpg'
    },
    {
      country: 'Taiwan',
      city: 'Taipei',
      imageURL: '/images/taipei.jpg'
    },
    {
      country: 'USA',
      city: 'California',
      imageURL: '/images/cali.jpg'
    },
    {
      country: 'Indonesia',
      city: 'Bali',
      imageURL: '/images/bali.jpg'
    },
  ]
  return (
    <>
      <h3 className='destinations--title'>Popular Destinations</h3>
      <div className='destinations--container'>
        {places.map((item, index) => (
          <Link state={{data:item}} to={`/destination/${item.country}+${item.city}`}>
            <div key={index} style={{ backgroundImage: `url(${item.imageURL})`, backgroundSize: 'cover', backgroundPositionY: '70%' }} className='destinations--card'>
              {/* <img src={item.imageURL} alt="" /> */}
              <p>{item.country}</p>
              <p>{item.city}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Destinations