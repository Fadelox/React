import React,{Usestat, useState} from 'react'


function Uses() {
  const [count,setCount]=useState(0);
  const dec=()=>{
    setCount(count-1)
  }
  const rest=()=>{
    setCount(0)
  }
  const incr=()=>{
    setCount(count+1)
  }


  return (
    <><div className='count'>
      <p className='number'>{count}</p>
      <button className='decrement' onClick={dec}>Decrement</button>
      <button className='rest' onClick={rest}>Rest</button>
      <button className='increment' onClick={incr}>Increment</button>
      </div>
    </>
  )
}

export default Uses