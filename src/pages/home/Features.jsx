import React from 'react'
import cardData from '../../data/cardData'
import '../../styles/Features.css'

const Features = () => {
    return (
        <div className="features--container">
            <h3>Featured Location</h3>
            <FeatureCard />
        </div>
    )
}

export default Features

const FeatureCard = () => {

    //render star ratings
    const renderStars = (num) => {
        const stars = []
        for (let i = 0; i < num; i++) {
            stars.push('/svg/star-solid.svg')
        }
        const displayStarRating = stars.map((star, index) => (
            <img key={index} className='solidStar' src={star}></img>
        ))
        return displayStarRating
    }

    const cardEls = cardData.map((card, index) => (
        <div key={index} className="featureCard--card">
            <img src={card.imageUrl} alt="" />
            <div className="featureCard--cardText">
                <h4>{card.title}</h4>
                <div className="featureCard--ratings">
                    <div>{renderStars(card.rating)}</div>
                    <p>{card.reviewCount} Reviews</p>
                </div>
                <span>${card.price} USD</span>
            </div>
        </div>
    ))
    return (
        <div className="featureCard--container">
            {cardEls}
            {cardEls}
        </div>
    )
}