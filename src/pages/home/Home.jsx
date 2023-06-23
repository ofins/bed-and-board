import React from 'react'
import FrontCover from './FrontCover'
import Features from './Features'
import Destinations from './Destinations'
import Inspiration from './Inspiration'

const Home = () => {
  return (
    <div className="home--container">
      <FrontCover />
      <Features />
      <Destinations />
      <Inspiration />
    </div>
  )
}

export default Home