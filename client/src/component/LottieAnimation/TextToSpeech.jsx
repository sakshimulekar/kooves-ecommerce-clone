// TextToSpeech.js

import React, { useEffect } from 'react';

const TextToSpeech = () => {
  const textToSpeak = "Your ordered placed successfull. shop again"; // Define your static text

  const speakText = () => {
    const synth = window.speechSynthesis;

    if (synth && textToSpeak) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      synth.speak(utterance);
    }
  };
//   useEffect(()=>{
//     speakText()
//   },[])

  return (
    <div>
      {/* <p>{textToSpeak}</p> */}
      <button onClick={speakText}>Speak</button>
    </div>
  );
};

export default TextToSpeech;
