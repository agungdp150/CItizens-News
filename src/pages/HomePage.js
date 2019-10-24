import React, { Component } from 'react';
import HeadCategory from '../components/HeadCategory';
import HeaderS from '../components/HeaderS';
import NewJumbotron from '../components/NewJumbotron';
import CardHotNews from '../components/CardHotNews';
import GridVideo from '../components/GridVideo';
import Contribution from '../components/Contribution';
import Footer from '../components/Footer';
import GridNews from '../components/GridNews';



export class HomePage extends Component {
  render() {
    return (
      <div>
        <HeadCategory/>
        <HeaderS/>
        <NewJumbotron/>
        <CardHotNews/>
        <Contribution/>
        <GridNews/>
        <GridVideo/>
        <Footer/>
      </div>
    )
  }
}

export default HomePage
