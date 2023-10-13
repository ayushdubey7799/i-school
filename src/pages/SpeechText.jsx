import React, { useState } from 'react';
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition';
function SpeechToText() {
  const startListening = () => SpeechRecognition.startListening({continuous: true, language: 'en-IN'});
  const {transcript,browserSupportsSpeechRecognition} = useSpeechRecognition();
  if(!browserSupportsSpeechRecognition)return null;
  return (
    <div>
      <h1>Speech to Text Conversion</h1>
      <button onClick={startListening} >
        Start Listening
      </button>
      <button onClick={() => SpeechRecognition.stopListening()}>
        Stop Listening
      </button>
      <p>{transcript}</p>
    </div>
  );
}

export default SpeechToText;