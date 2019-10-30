import React, { Component } from 'react';
import HeadCategory from '../components/layout/HeadCategory';
import HeaderS from '../components/layout/HeaderS';
import NewJumbotron from '../components/Home/NewJumbotron';
import CardHotNews from '../components/Home/CardHotNews';
import GridVideo from '../components/Home/GridVideo';
import Contribution from '../components/Home/Contribution';
import Footer from '../components/layout/Footer';
import GridNews from '../components/Home/GridNews';



export class HomePage extends Component {
  render() {
    return (
      <div>
        <HeadCategory/>
        {/* <HeaderS/> */}
        {/* <NewJumbotron/> */}
        {/* <CardHotNews/>
        <Contribution/> */}
        <GridNews/>
        {/* <GridVideo/>
        <Footer/> */}
      </div>
    )
  }
}

export default HomePage
