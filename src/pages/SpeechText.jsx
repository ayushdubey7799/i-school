// import React, { useState } from 'react';
// import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition';
// function SpeechToText() {
//   const startListening = () => SpeechRecognition.startListening({continuous: true, language: 'en-IN'});
//   const {transcript,browserSupportsSpeechRecognition} = useSpeechRecognition();
//   if(!browserSupportsSpeechRecognition)return null;
//   return (
//     <div>
//       <h1>Speech to Text Conversion</h1>
//       <button onClick={startListening} >
//         Start Listening
//       </button>
//       <button onClick={() => SpeechRecognition.stopListening()}>
//         Stop Listening
//       </button>
//       <p>{transcript}</p>
//     </div>
//   );
// }

// export default SpeechToText;


import { ReactMediaRecorder } from "react-media-recorder";
import { useState } from "react";
const SpeechToText = () => {
  const [audioData, setAudioData] = useState(null);

  const handleStop = (blobUrl, blob) => {
    setAudioData(blob);
    console.log(blob);
  };

  const sendAudioToBackend = () => {
    if (audioData) {
      const formData = new FormData();
      formData.append("audio", audioData, "recorded_audio.wav"); 

      fetch("https://your-backend-api-endpoint", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.status === 200) {
          }
        })
        .catch((error) => {
          console.error("Error sending audio to the backend:", error);
        });
    }
  };
 
  return (
    <div>
    <ReactMediaRecorder
      audio
      onStop={handleStop}
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => {
        return (<div>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <audio src={mediaBlobUrl} controls autoPlay loop />
        </div>
      )}}
    />
  </div>
  )
}




export default SpeechToText;