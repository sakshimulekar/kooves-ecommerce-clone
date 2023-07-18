import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import video1 from "../Assest/video1.mp4";
import video2 from "../Assest/video2.mp4";
import video3 from "../Assest/video3.mp4";
import video4 from "../Assest/video (1080p).mp4";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const videos = [video2, video1, video3,video4];
const autoChangeTime = 3000; // Time in milliseconds

const VideoCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [hovered, setHovered] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(changeVideo, autoChangeTime);
    }

    return () => clearInterval(intervalId);
  }, [autoplay]);

  const changeVideo = () => {
    sliderRef.current.slickNext();
  };

  const handleLeftArrowClick = () => {
    setAutoplay(false);
    sliderRef.current.slickPrev();
  };

  const handleRightArrowClick = () => {
    setAutoplay(false);
    sliderRef.current.slickNext();
  };

  const handleVideoHover = () => {
    setHovered(true);
  };

  const handleVideoLeave = () => {
    setHovered(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: autoChangeTime,
  };

  return (
    <div style={{ position: 'relative' }}>
      <Slider {...settings} ref={sliderRef}>
        {videos.map((video, index) => (
          <div key={index}>
            <video
              src={video}
              loop
              autoPlay={autoplay}
              muted
              type="video/mp4"
              onMouseEnter={handleVideoHover}
              onMouseLeave={handleVideoLeave}
            />
          </div>
        ))}
      </Slider>

      {hovered && (
        <>
          <ChevronLeftIcon
            style={{ position: 'absolute', top: '50%', left: '2%', transform: 'translateY(-50%)' }}
            onClick={handleLeftArrowClick}
          />
          <ChevronRightIcon
            style={{ position: 'absolute', top: '50%', right: '2%', transform: 'translateY(-50%)' }}
            onClick={handleRightArrowClick}
          />
        </>
      )}
    </div>
  );
};

export default VideoCarousel;

