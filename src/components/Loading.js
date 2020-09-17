import React from 'react'
import ReactLoading from 'react-loading'

export default function Loading() {
    return (
        <div className='loading'>
            <ReactLoading color='#271504' width="150px" type="bubbles"/>
        </div>
    )
}