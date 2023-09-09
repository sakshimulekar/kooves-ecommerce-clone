import React, { useEffect } from 'react';
import Lottie from 'lottie-web';
import rightclick from '../LottieAnimation/righttick.json';
import { useNavigate } from 'react-router-dom';

const YourComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const animationContainer = document.getElementById('animation-container-2');

    const animation = Lottie.loadAnimation({
      container: animationContainer,
      animationData: rightclick,
      loop: false,
      autoplay: true,
    });

    // Add an onComplete callback to navigate to the home page when the animation completes
    animation.addEventListener('complete', () => {
      navigate('/'); // Replace '/' with the path to your home page
    });

    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      animation.removeEventListener('complete', () => {
        navigate('/');
      });
    };
  }, [navigate]);

  return (
    <div>
      <div id="animation-container-2" style={{ width: '700px', height: '700px', margin: 'auto' }}></div>
    </div>
  );
};

export default YourComponent;
