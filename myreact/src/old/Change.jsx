import React, { useState } from 'react'

function Change() {
    const [name,setName]=useState("")
    const [quantity,setQuantity]=useState(1)
    const [cmt,setCmt]=useState("")
    const [payment,setPayment]=useState("")
    const [delivery,setDelivery]=useState("")
    function heiss(e){
        setName(e.target.value)
    }
    function wieviel(e){
        setQuantity(e.target.value)
    }
    function aussagen(e){
        setCmt(e.target.value)
    }
    function bezahlen(e){
        setPayment(e.target.value)
    }
    function bieten(e){
        setDelivery(e.target.value);
    }
  return (
    <div>
        <input value={name} onChange={heiss} type='text'/>
        <p>Name {name}</p>
        <input value={quantity} onChange={wieviel} type='number'/>
        <p>Quantity {quantity}</p>
        <input value={cmt} type='textarea' onChange={aussagen} placeholder='hallo alles gut bei dir'/>
        <p>Er schreibt {cmt}</p>
        <select value={payment} onChange={bezahlen}>
            <option value=''>wahlen sie ein</option>
            <option value='Visa'>Visa</option>
            <option value='MatserCard'>MasterCard</option>
        </select>
        <br/>
        <br/>
        <br/>
        <label>
            <input type='radio' value="Take" checked={delivery=="Take"} onChange={bieten}/>
            Pick
        </label>
        <label>
            <input type='radio' value="Send" checked={delivery=="Send"} onChange={bieten}/>
            Delivere
        </label>
             <p>du willst mit {delivery} bezahlen</p>

    
    
    
    
    
    
    
    </div>
  )
}

export default Change