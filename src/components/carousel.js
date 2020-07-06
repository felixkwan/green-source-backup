import React from "react"
import Flickity from 'react-flickity-component'
import Image1 from '../images/bk-college-768.png';
import Image2 from '../images/bk-office-768.png';
import Image3 from '../images/bk-deploy-768.png';

import "flickity/css/flickity.css";


const flickityOptions = {
    initialIndex: 2
}

function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={{
        autoPlay: 2500,
        pauseAutoPlayOnHover: true,
        adaptiveHeight: true,
        prevNextButtons: false,
        watchCSS: true,
        }} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src={Image1} alt="college"/>
      <img src={Image2} alt="office"/>
      <img src={Image3} alt="deploy"/>
    </Flickity>
  )
}


export default Carousel