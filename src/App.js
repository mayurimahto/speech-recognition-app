import React, { useState } from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";

const App = () => {
  
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration:1000
  });
  
  const StartListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const StopListening = () => SpeechRecognition.stopListening();
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return(
    <>
    <div className='container'>
      <h2>Speech to Text Converter</h2>
      <br/>
      <p>React hook that converts speech from the microphone to text and makes it available to your React components.</p>

      <div className='main-content' onClick={() => setTextToCopy(transcript)}>
        {transcript}
      </div>

      <div className='btn-style'>
      <button onClick={setCopied}>
      {isCopied ? "Copied!" : "Copy to clipboard"}
      </button>
        <button onClick={StartListening}>Start Listening</button>
        <button onClick={StopListening}>Stop Listening</button>
      </div>
      
      <p>[Note: Click on the text box first then the copy button.]</p>
    </div>
    </>
  );
};

export default App;
