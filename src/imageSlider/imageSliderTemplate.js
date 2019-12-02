import Carousel from 'react-bootstrap/Carousel'
import React from 'react';


const ImageSliderTemplate = (props)=>
{
	return(
	<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/200/60"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>First slide text.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/id/1/200/60"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Second slide text.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/id/0/200/60"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Third slide text.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
);
}
export default ImageSliderTemplate;