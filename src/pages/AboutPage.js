import React, { Component } from 'react';
import HeadCategory from '../components/layout/HeadCategory';
import About from '../components/Home/About';
import Footer from '../components/layout/Footer';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <HeadCategory/>
        <About/>
        <Footer/>
      </div>
    )
  }
}

export default AboutPage
