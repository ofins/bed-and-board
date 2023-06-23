import Carousel from 'react-bootstrap/Carousel';
import '../styles/Carousel.css'

function CarouselCreate(props) {

    //render images

    const arr = []
    const imageArrayData = (url, count) => {
        for (let i = 1; i < count + 1; i++) {
            arr.push(url + i + '.jpg')
        }
        return arr
    }
    imageArrayData(props.urlBase, props.imageCount)

    const renderImage = arr.map((img, index) => (
        <Carousel.Item key={index}>
            <img className='carousel-image d-block w-100' src={img} />
            <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet.</p>
            </Carousel.Caption>
        </Carousel.Item>
    ))

    return (
        <Carousel>
            {renderImage}
        </Carousel>
    );
}

export default CarouselCreate;