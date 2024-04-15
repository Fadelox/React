import React from 'react'

import List from './List'

function App() {
  const fruits=[{id:1,name:'apfel',cal:50},
  {id:2,name:'banane',cal:455},
  {id:3,name:'erdbeern',cal:120},
  {id:4,name:'peach',cal:89}]
  const gemuse=[{id:1,name:"kartofeln",cal:88},
                {id:2,name:"Tomaten",cal:77},
              {id:3,name:"karotte",cal:69},
            {id:8,name:"Salate",cal:78},]
  return (
    <>
    {fruits.length>0 ? <List items={fruits} categorie="Obst" />:null}
    {gemuse.length>0 ?<List items={gemuse} categorie="Gemuse" />:null}
    </>
  )
  
  
}

export default App
