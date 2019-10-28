import React, { Component } from 'react';
import HeadCategory from '../components/layout/HeadCategory';
import DetailVideo from '../components/Home/DetailVideo';

class DetailVideoPage extends Component {
  render() {
    return (
      <div>
        <HeadCategory/>
        <DetailVideo/>
      </div>
    )
  }
}

export default DetailVideoPage;
