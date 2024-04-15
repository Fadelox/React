import React from 'react'

function User(props) {
  return (
    props.user?<h1 className='userin'>Hellow {props.name}</h1>:<h1 className='userout'>Please log in</h1>
  )

}

export default User