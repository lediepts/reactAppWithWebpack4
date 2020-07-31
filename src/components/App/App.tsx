import React from 'react';
import './app.scss';

function App() {
  const handleClick = ()=>{
    console.log("object")
  }
  return (
    <div className="App">
      <header>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={()=>handleClick()} >Click Me</button>
      </header>
    </div>
  );
}

export default App;
