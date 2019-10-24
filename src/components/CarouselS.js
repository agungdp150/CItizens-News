import React, { Component } from 'react';
import Carousel from 'nuka-carousel';


import '../assets/scss/CarouselS.scss';


class CarouselS extends Component {
  render() {
    return (
      <div>
        <div className="carousel-style">
        <Carousel>
          <img src="https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200" alt="slide1" />
          <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200"  alt="slide2" />
          <img src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200"  alt="slide3" />
          <img src="https://images.pexels.com/photos/50711/board-electronics-computer-data-processing-50711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200"  alt="slide4" />
       </Carousel>
        </div>
      </div>
    )
  }
}



export default CarouselS;

