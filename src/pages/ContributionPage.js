import React, { Component } from 'react';
import HeaderS from '../components/HeaderS'
import Contribution from '../components/Contribution';
import Footer from '../components/Footer';

class ContributionPage extends Component {
  render() {
    return (
      <div>
        <HeaderS/>
        <Contribution/>
        <Footer/>
      </div>
    )
  }
}

export default ContributionPage
