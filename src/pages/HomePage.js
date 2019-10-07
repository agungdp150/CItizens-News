import React, { Component } from 'react';
import HeaderS from '../components/HeaderS';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import CarouselS from '../components/CarouselS';
import GridNews from '../components/GridNews';
import Citizens from '../components/Citizens';



export class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderS/>
        <Jumbotron/>
        <Citizens/>
        <CarouselS/>
        <GridNews/>
        <Footer/>
      </div>
    )
  }
}

export default HomePage
