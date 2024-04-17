import React, { useState } from 'react'

function Colore() {
    const [color,setColor]=useState("#FFFFFF")
    const handelchange=(e)=>{
        setColor(e.target.value)
    }
  return (
    <div className='all'>
        <div className='color' style={{backgroundColor:color}}> <p> code colore is {color}</p></div>
        <p>Choose a colore bitte</p>
        <input type='color' value={color} onChange={handelchange}/>
         

    </div>
  )
}

export default Colore