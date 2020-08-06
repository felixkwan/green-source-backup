import React from "react"
import Flickity from 'react-flickity-component'
import Image1 from '../images/bk-college-768.png';
import Image2 from '../images/bk-office-768.png';
import Image3 from '../images/bk-deploy-768.png';

import "flickity/css/flickity.css";

function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={{
        autoPlay: 2500,
        pauseAutoPlayOnHover: true,
        prevNextButtons: false,
        watchCSS: true,
        initialIndex: 0
        }} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
        <div className="carousel-cell">
          <img src={Image1} alt="college"/>
        </div>
        <div className="carousel-cell">
          <img src={Image2} alt="office"/>
        </div>
        <div className="carousel-cell">
          <img src={Image3} alt="deploy"/>
        </div>
    </Flickity>
  )
}


export default Carousel