import React, { useState } from 'react'

function Listt() {
    const [car,setCar]=useState([])
    const [name,setName]=useState('')
    const [model,setModel]=useState('')
function handelname(e){
    setName(e.target.value)
}
function  handelmodel(e){
    setModel(e.target.value)

}
function handeladd(){
    const newcar={
        carN:name,
        carM:model
    };
    console.log(newcar)
    setCar(cs=>[...cs,newcar])
    setModel('')
    setName('')

}
function handelrem(idd){
  
       setCar(c=>c.filter((_,i)=>i!==idd))
       
}
  return (
    <div>
         <p>List</p>
          <ul>
            
            {car.map((e,index)=>(<li key={index} onClick={()=>handelrem(index)} >{e.carM} {e.carN}</li>))}
          </ul>
          <input type='text' value={name} onChange={handelname}/>
          <input type='text'value={model} onChange={handelmodel}/>
          <button onClick={handeladd}>THis</button>
         




    </div>
  )
}

export default Listt