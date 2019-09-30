import React, { Component } from 'react';
import HeaderS from '../components/HeaderS';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

class CategoryPage extends Component {
  render() {
    return (
      <div>
        <HeaderS/>
        <Categories/>
        <Footer/>
      </div>
    )
  }
}

export default CategoryPage
