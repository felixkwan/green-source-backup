import React from "react"
import Flickity from 'react-flickity-component'

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
        </div>
        <div className="carousel-cell">
        </div>
        <div className="carousel-cell">
        </div>
    </Flickity>
  )
}


export default Carousel