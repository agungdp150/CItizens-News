import React, { Component } from 'react';
import HeaderS from '../components/HeaderS';
import NewJumbotron from '../components/NewJumbotron';
import CardHotNews from '../components/CardHotNews';
import Footer from '../components/Footer';
import GridNews from '../components/GridNews';



export class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderS/>
        <NewJumbotron/>
        <CardHotNews/>
        <GridNews/>
        <Footer/>
      </div>
    )
  }
}

export default HomePage
