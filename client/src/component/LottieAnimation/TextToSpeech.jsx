import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TextToSpeech = () => {
  const navigate = useNavigate()
  const [textToSpeak] = useState("Your order was placed successfully. Shop again.");

  const speakText = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    synth.speak(utterance);

    utterance.addEventListener('end', () => {
      console.log('Speech ended.');
      navigate('/')
    });
  };

  return (
    <div style={{margin:'auto'}}>
      <button style={{width:'50%',margin:'auto',display:'block',backgroundColor:'#ff0080ea',color:'white',fontWeight:'bold',padding:'10px'}} onClick={speakText}>OK</button>
    </div>
  );
};

export default TextToSpeech;

