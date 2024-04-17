import React, { useState } from 'react'

function Updobj() {
    const [car,setCar]=useState({name:'Tesla',model:15,year:2012})
    function handelname(e){
        setCar(c=>({...c,name:e.target.value}))
    }
    function handelmodel(e){
        setCar(c=>({...c,model:e.target.value}))
    }
    function handelyear(e){
        setCar(c=>({...c,year:e.target.value}))
    }

  return (
    <div>
          <p>Du besitzt ein Auto {car.name} von {car.year} </p>
          <input type='text' value={car.name} onChange={handelname}/>
          <input type='number' value={car.model} onChange={handelmodel}/>
          <input type='number' value={car.year} onChange={handelyear}/>
    
    </div>
  )
}

export default Updobj