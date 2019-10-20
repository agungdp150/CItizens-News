import React, { Component } from 'react'
import HeaderS from '../components/HeaderS';
import HeadCategory from '../components/HeadCategory';
import Detail from '../components/Detail';
import Footer from '../components/Footer';

class DetailPage extends Component {
  render() {
    return (
      <div>
        <HeaderS/>
        <HeadCategory/>
        <Detail/>
        <Footer/>
      </div>
    )
  }
}

export default DetailPage
