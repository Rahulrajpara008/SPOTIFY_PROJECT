import React from 'react'
import '../Style/Big_Album.css'
import { assets } from '../assets/assets'


const Big_Album = ({Image,title}) => {
  return (
    <div className='Big_Album'>
        <h2>{title}</h2>
        <img src={Image} alt="" id='bigimage'/>
    </div>
  )
}

export default Big_Album