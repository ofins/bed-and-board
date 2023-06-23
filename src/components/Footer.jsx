import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer--container">
        <div className="footer--leftContext">
            <p>2023 Bed & Board, Inc. All rights reserved.</p>
        </div>
        <div className="footer--rightContext">
            <span>FAQs</span>
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
        </div>
    </div>
  )
}

export default Footer