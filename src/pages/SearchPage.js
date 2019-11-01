import React, { Component } from 'react'
import HeadCategory from '../components/layout/HeadCategory';
import Search from '../components/Home/Search';
import Footer from '../components/layout/Footer';

class SearchPage extends Component {
  render() {
    return (
      <div>
        <HeadCategory/>
        <Search/>
        <Footer/>
      </div>
    )
  }
}

export default SearchPage;
