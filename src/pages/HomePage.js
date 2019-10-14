import React, { Component } from 'react';
import HeaderS from '../components/HeaderS';
import HeadCategory from '../components/HeadCategory';
import CardHotNews from '../components/CardHotNews';
import Footer from '../components/Footer';
import CarouselS from '../components/CarouselS';
import GridNews from '../components/GridNews';



export class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderS/>
        <HeadCategory/>
        <CarouselS/>
        <CardHotNews/>
        <GridNews/>
        <Footer/>
      </div>
    )
  }
}

export default HomePage
