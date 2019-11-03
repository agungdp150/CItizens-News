import React, { Component } from 'react'
// import HeaderS from '../components/HeaderS';
import HeadCategory from '../components/layout/HeadCategory';
import Detail from '../components/Home/Detail';
import Footer from '../components/layout/Footer';

class DetailPage extends Component {
  render() {
    return (
      <div>
        {/* <HeaderS/> */}
        <HeadCategory/>
        <Detail/>
        <Footer/>
      </div>
    )
  }
}

export default DetailPage
