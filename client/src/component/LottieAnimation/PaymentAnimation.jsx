import React, { useEffect } from 'react'
import Lottie from 'lottie-web';
import checkout from '../LottieAnimation/checkout.json'

const PaymentAnimation = () => {
    const playAnimation = () => {
        Lottie.loadAnimation({
          container: document.getElementById('lottie-container'), // Specify the HTML element to render the animation
          animationData: checkout, // Pass the imported JSON animation data
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
    <div id="lottie-container" style={{ width: '600px', height: '600px',margin:'auto' }}></div>
  </div>
  )
}

export default PaymentAnimation
