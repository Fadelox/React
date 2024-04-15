import React from 'react'
import Pic from './assets/bag2.jpg'

function Card() {
  return (
    <>
    <div className='card'>
        <img className='card-img' src={Pic} alt='profil picture'></img>
        <h1 className='card-title'>Fadel Youssef</h1>
        <p className='card-text'>ich lerne deutsch jetzt und ich will nach deutschland fliegen inchallah</p>
    </div>
    </>
  )
}

export default Card