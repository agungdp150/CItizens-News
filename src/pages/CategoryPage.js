import React, { Component } from 'react';
import HeadCategory from '../components/layout/HeadCategory';
import Categories from '../components/Home/Categories';
import Footer from '../components/layout/Footer';

class CategoryPage extends Component {
  render() {
    return (
      <div>
        <HeadCategory/>
        <Categories/>
        <Footer/>
      </div>
    )
  }
}

export default CategoryPage
