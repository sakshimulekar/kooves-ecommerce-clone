import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const VideoCarousel = ({videos}) => {
  console.log(videos)
  return (
    
    <Carousel 
    autoPlay={true}
    interval={3000}
    showIndicators={true}
    infiniteLoop={true}
    showThumbs={false}
    stopOnHover={false}
    transitionTime={500}
    swipeable={true}
    dynamicHeight={false}
    >
        {videos?.map((e,i)=>{
          return (
          <div key={i}>
            <img src={e} alt='img' autoPlay />
          </div>
        )
        })}
    </Carousel>
  )
};

export default VideoCarousel;
