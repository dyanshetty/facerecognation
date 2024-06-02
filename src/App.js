import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

function App() {
  const [input, setInput] = useState("");
//success
  const onInputChange = (event) => {
    console.log(event.target.value);
  };
  onsubmit =()=>{
    console.log("click")
  }

  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange}
       onButtonSubmit={onsubmit} />
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
