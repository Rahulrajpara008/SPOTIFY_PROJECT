import React from 'react'
import '../Style/AlbumItem.css'
import { assets } from '../assets/assets'

const AlbumItem = ({Image,title,id}) => {
  return (
    <div className='Album-item'>
        <div className='AlbumItem-item'>
            <img src={assets.Rectangle16} alt="" id='rect' />
            <p id='albumm'>Weekly Motivatio...</p>
        </div>
    </div>
  )
}

export default AlbumItem