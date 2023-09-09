import React, { useEffect } from 'react';
import Lottie from 'lottie-web';
import checkmarkAnimation from './emptycart.json'; // Import the animation JSON

const EmptyCart = () => {
  // Function to trigger animation (e.g., on successful payment)
  const playAnimation = () => {
    Lottie.loadAnimation({
      container: document.getElementById('lottie-container'), // Specify the HTML element to render the animation
      animationData: checkmarkAnimation, // Pass the imported JSON animation data
      loop: false, // Whether the animation should loop
      autoplay: true, // Whether the animation should play automatically
    });
  };
  useEffect(()=>{
    playAnimation()
  },[])
  return (
    <div style={{margin:'auto',width:'50%'}}>
      {/* <button onClick={playAnimation}>Make Payment</button> */}
      <div id="lottie-container" style={{ width: '400px', height: '400px',margin:'auto',paddingRight:'30px' }}></div>
    </div>
  );
};

export default EmptyCart;
