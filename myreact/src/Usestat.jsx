import React,{Usestat, useState} from 'react'


function Uses() {
    const [name, setName]=useState("No one");
    const [age,setAge]=useState(0);
    const show=()=>{
        setName("Fadel");
    }
    const step=()=>{
        setAge(age+1)
    }

  return (
    <>
    <p>Name:{name}</p>
    <button onClick={show}>Show</button>
    <p>Age:{age}</p>
    <button onClick={step}>stepup</button>
    
    
    
    </>
  )
}

export default Uses