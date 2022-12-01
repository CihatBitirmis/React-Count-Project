import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='container'>
      <h1>Cihat Bitirmiş</h1>
      <hr/>
      <h4>Count {count}</h4>
      <button onClick={()=>{
        setCount(count + 1);
      }}>increase</button>
      <button onClick={()=>{
        setCount(count - 1);
      }}>decrease</button>
    </div>
  )
}

export default App