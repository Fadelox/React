import React from 'react'

function Student(props) {
  return (
    <>
    <div className='student'>
    <p>Name={props.name}</p>
    <p>Age={props.age}</p>
    <p>Er ist hier={props.hier?"yes":"non"}</p>
    </div>
    </>
  )
}

export default Student