import React, { Component } from 'react'
import HeaderS from '../components/HeaderS';
import Detail from '../components/Detail';
import Footer from '../components/Footer';

class DetailPage extends Component {
  render() {
    return (
      <div>
        <HeaderS/>
        <Detail/>
        <Footer/>
      </div>
    )
  }
}

export default DetailPage
