import React, { useState } from 'react'

function Updarray() {
    const [foods,setFoods]=useState(["Apfel","Banane","kase"])
    function handelAdd(){
        const ff=document.getElementById('ja').value;
        document.getElementById('ja').value='';
        setFoods((f)=>([...f,ff]))
    }
    function handelrem(index){
        setFoods(foods.filter((_,i)=>i!==index))
    }
  return (
    <div>
        <ul>
            {foods.map((a,index)=>
            <li key={index} onClick={()=>handelrem(index)}>{a}</li>
        )}
   
        </ul>
        <input type='text' id='ja'  /><button onClick={handelAdd}>Add</button>
    </div>
  )
}

export default Updarray