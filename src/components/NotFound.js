import React from 'react'
import img404 from '../404.jpg'

export default function NotFound() {
    return (
        <div className='not-found'>
            <img src={img404} alt='404 image'/>
        </div>
    )
}