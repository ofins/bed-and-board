import React from 'react'
import '../../styles/Inspiration.css'
import { Link } from 'react-router-dom'

const Inspiration = () => {
  const inspirationData = [
    {
      title: 'Five reasons to visit Taiwan',
      subtext:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, id.',
      imageURL:'/inspirationData/taipei1.jpg',
      urlBase:'/inspirationData/taipei',
      imageCount: 3
    },
    {
      title: 'Diving in the Philippines',
      subtext:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, id.',
      imageURL:'/inspirationData/phi1.jpg',
      urlBase:'/inspirationData/phi',
      imageCount: 3
    },
    {
      title: 'Space Tour with Elon',
      subtext:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, id.',
      imageURL:'/inspirationData/space1.jpg',
      urlBase:'/inspirationData/space',
      imageCount: 3
    },
  ]
  return (
    <div className="inspiration--container">
      <h3>Be Inspired</h3>
      <div className='inspiration--cardContainer'>
      {inspirationData.map(article => (
        <Link state={{data: article}} to={`/inspiration/${article.title}`}>
        <div className="inspiration--card">
          <img src={article.imageURL} alt={`photo of ${article.title}`} />
          <p>{article.title}</p>
          <p>{article.subtext}</p>
        </div>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Inspiration