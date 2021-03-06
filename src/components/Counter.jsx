import React, { useState } from 'react'

export default function Counter() {
  
  const [count, setCount] = useState(0)

  return (
    <div className="text-white">
      <h1>Simple React Counter</h1>
      <p>Count: {count} </p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}