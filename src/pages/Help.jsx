import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Help.css'

const Help = () => {
  return (
    <div className="help--container">
        <h3>Bed & Board /help</h3>
        <div className="help--instruction">
            <h5 className='help subtitle'>Logging in</h5>
            <p>To be able to get to reservation page for this site, you should make sure you're <Link to="/login">logged in</Link> to the site. </p>
            <p>There is a mock account available for you to use, or if you'd like you can try out the <Link to="/sign-up">sign up</Link> feature</p>
            <h5 className='help subtitle'>Tips</h5>
            <ul>
                <li>There are no database used. All account information are saved in states, which will be lost once the page is refreshed.</li>
                <li>You must selection destination, check-in, and check-out date to be able to search for hotels</li>
            </ul>
            <h5 className='help subtitle'>Other</h5>
            Link to Github <a href="https://github.com/ofins/bed-and-board">source</a>
        </div>
    </div>
  )
}

export default Help