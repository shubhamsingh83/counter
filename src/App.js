import React, { useState} from "react";
import './App.css';

function App() {
  const[count,setCount]=useState(0);
  return (
    <div >
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
    </div>
  );
}

export default App;
