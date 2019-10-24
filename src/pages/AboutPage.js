import React, { Component } from 'react';
import HeadCategory from '../components/HeadCategory';
import About from '../components/About';
import Footer from '../components/Footer';

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
