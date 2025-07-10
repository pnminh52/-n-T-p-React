import React from 'react'
import { useState } from 'react'

const CounterApp = () => {
    const [count, setCount]=useState(0)
    const handlePlusIncrease =()=>{
        setCount(count+1)

    }
    const handlePlusDecrease =()=>{
        setCount(count-1)

    }
    const handleStackIncrease=()=>{
      setCount(count*2)
    }
    const handleStackDeacrease=()=>{
      setCount(count/2)
    }
  return (
    <div>
     <p> Day la counter app</p>
     <div >
     <button onClick={()=>handlePlusIncrease()}>Tăng</button>
      <button onClick={()=>handleStackIncrease()}>Nhân đôi</button>
      <p>{count}</p>
      <button onClick={()=>setCount(0)}>Reset</button>

      <button onClick={()=>handlePlusDecrease()}>Giảm</button>
      <button onClick={()=>handleStackDeacrease()}>Chia đôi</button>
     </div>

    </div>
  )
}

export default CounterApp
