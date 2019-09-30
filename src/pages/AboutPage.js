import React, { Component } from 'react';
import HeaderS from '../components/HeaderS';
import About from '../components/About';
import Footer from '../components/Footer';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <HeaderS/>
        <About/>
        <Footer/>
      </div>
    )
  }
}

export default AboutPage
