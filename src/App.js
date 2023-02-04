import React from "react";
import './App.css';


const message = () => {
  alert("Hello otário!")
}

function App() {
  
  return (
    <div className="App">
      <button onClick={message}>Message</button>
    </div>
  );
}

export default App;
