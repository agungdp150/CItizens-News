import React, { Component } from 'react';

import Particles from 'react-particles-js';

import '../assets/scss/Jumbotron.scss';


const particlesOptions = {
  particles : {
    number: {
      value: 120,
      density : {
        enable: true,
        value_area: 800
      }
    }
  }
}


class Jumbotron extends Component {
  render() {
    return (
      
      <div>
        <div className="jumbo-container">
        <div className="text-style">
        <h1 className="text-center font-normal text-5xl mb-8">WELCOME </h1>
        <p className="text-center font-light text-md mx-48">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet velit ligula, vel ultricies quam consectetur non. Maecenas auctor, ex at varius luctus, mauris libero ullamcorper dui, a ornare mi arcu ut leo. Curabitur et ex tempor dolor tincidunt blandit. Integer sollicitudin pretium dui, suscipit convallis est mattis eget. Nunc dignissim dui sit amet sapien laoreet vulputate. Vivamus eget ipsum ullamcorper, ullamcorper erat ut, iaculis nunc. Curabitur et lacus eget lorem viverra pretium.<br/>
        Maecenas ut sapien vitae ipsum porta facilisis vel id ligula. Proin blandit eros enim, ac porttitor neque mattis non.         Maecenas ut sapien vitae ipsum porta facilisis vel id ligula. Proin blandit eros enim, ac porttitor neque mattis non.
        </p>

        </div>
        <div>
        <Particles
          className="jumbotron-particles" 
          params={particlesOptions} 
        />
        </div>
        </div>
      </div>
    )
  }
}

export default Jumbotron
