import React, { Component } from 'react';
import HeadCategory from '../components/HeadCategory';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

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
