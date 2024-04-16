import React from 'react'


function Click() {
    let x=0;
    const handleclick=(e)=>e.target.textContent="OK Stop"
  return (
    <><button onClick={(e)=>handleclick(e)}>Click me </button>
    </>
  )
}

export default Click