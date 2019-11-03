import React, { Component } from 'react';
import HeadCategory from '../components/layout/HeadCategory';
import Footer from '../components/layout/Footer';
import GridNews from '../components/Home/GridNews';



export class HomePage extends Component {
  render() {
    return (
      <div>
        <HeadCategory/>
        <GridNews/>
        <Footer/>
      </div>
    )
  }
}

export default HomePage
