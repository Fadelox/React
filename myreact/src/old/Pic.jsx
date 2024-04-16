import React from 'react'


function Pic() {
    const pic='./src/assets/bag2.jpg';
    const handleclik=(e)=>e.target.style.display="none";
  return(
   <img onClick={(e)=>handleclik(e)} src={pic}></img>
  )
}

export default Pic