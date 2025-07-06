import React from 'react'
import { useState } from 'react'

const CounterApp = () => {
    const [count, setCount]=useState(0)
    const handleIncrease =()=>{
        setCount(count+1)

    }
    const handleDecrease =()=>{
        setCount(count-1)

    }
  return (
    <div>
     <p> Day la counter app</p>
     <div >
     <button onClick={()=>handleIncrease()}>Tăng</button>
      <p>{count}</p>
      <button onClick={()=>handleDecrease()}>Giảm</button>
     </div>

    </div>
  )
}

export default CounterApp
