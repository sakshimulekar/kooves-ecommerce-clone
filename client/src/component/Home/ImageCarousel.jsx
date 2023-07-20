import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import video1 from "../../Assest/video1.mp4";
import video2 from "../../Assest/video2.mp4";
import video3 from "../../Assest/video3.mp4";
import video4 from "../../Assest/video (1080p).mp4";
const videos=[video1,video2,video3,video4]
const VideoCarousel = () => {
  return (
    <Carousel autoPlay={true} interval={2000}>
        {videos?.map((e,i)=>{
            return (
         <div key={i}>
            <video autoPlay loop muted>
            <source src={e} type="video/mp4" />
            </video>
        </div>
        )
        })}
    </Carousel>
  );
};

export default VideoCarousel;
