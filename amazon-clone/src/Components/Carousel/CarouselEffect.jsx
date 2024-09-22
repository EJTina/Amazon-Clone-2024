import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { image } from './Images/data'; // Make sure the import path is correct
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Carousel.module.css'

function CarouselEffect() {
  return (
    <div>
    <Carousel
    //came from documentation
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
    >
      {image.map((imageItemLink, index) => (
        <img key={index} src={imageItemLink} alt={`Carousel item ${index + 1}`} />
      ))}
    </Carousel>

    <div className={classes.hero__img}></div>
    </div>
  );
}

export default CarouselEffect;