import React, { useEffect } from 'react';
import Lottie from 'lottie-web';
import checkmarkAnimation from './emptybag.json'; // Import the animation JSON

const EmptyWishlist = () => {
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
    <div style={{width:'50%',margin:'auto'}}>
      {/* <button onClick={playAnimation}>Make Payment</button> */}
      <div id="lottie-container" style={{ width: '500px', height: '500px',marginLeft:'150px',backgroundColor:'transparent' }}>
        <h1>asdgas</h1>
      </div>
    </div>
  );
};

export default EmptyWishlist;
