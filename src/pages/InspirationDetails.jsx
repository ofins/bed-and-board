import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/InspirationDetails.css'
import CarouselCreate from '../components/Carousel'

const InspirationDetails = () => {
    const location = useLocation();
    const data = location.state?.data

    return (
        <div className="inspirationDetails--container">
            <div className="inspirationDetails--imageContainer">
                <CarouselCreate urlBase={data.urlBase} imageCount={data.imageCount} />
            </div>
            <div className="inspirationDetails--context">
                <h3>{data.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ut eum ullam quod nihil error quidem! Harum odio adipisci, reprehenderit consequuntur reiciendis animi earum possimus dolores nobis aut, minus magni sequi nemo porro labore quisquam! Necessitatibus rem, voluptate fuga cumque magni, consequatur tempore commodi beatae vitae doloribus nisi impedit aliquid!</p>
                <h5>Lorem ipsum dolor sit amet.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod nemo eaque sed, quae nulla quas voluptates hic deserunt non, quidem numquam rerum nostrum omnis magnam fugit, fugiat aliquid assumenda praesentium unde adipisci! Voluptates, corporis!</p>
            </div>
        </div>
    )
}

export default InspirationDetails