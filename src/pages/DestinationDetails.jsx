import React from 'react'
import '../styles/DestinationDetails.css'
import { useLocation } from 'react-router-dom'

const DestinationDetails = () => {
    const location = useLocation();
    const data = location.state?.data

    console.log(data)
    return (
        <div className="destinationDetails--container">
            <img src={data.imageURL} alt={`photo of ${data.country}`} />
            <div className="destinationDetails--context">
                <h4>{data.city}, {data.country}</h4>
                <p className='destinationDetails--header'>Why you should visit {data.city}!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, expedita? Fuga, beatae eligendi, dicta ratione officia reprehenderit magni a molestias laborum minus alias debitis inventore. Iure veniam ut doloribus quaerat ipsum hic laudantium excepturi at quasi repudiandae vero harum, dolorum architecto officia amet veritatis asperiores consectetur consequuntur autem, provident facilis.</p>
                <p className='destinationDetails--header'>What to expect?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem mollitia, repudiandae expedita illum, blanditiis amet tempore illo earum sit facilis magni, officia quod ipsa. Est debitis explicabo cumque repudiandae.</p>
            </div>
        </div>
    )
}

export default DestinationDetails