import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import './css/Quora.css'

function Quora() {
  return (
    <div className='quora'>
        <Navbar/>
        <div className='quora__contents'>
          <div className='quora__content'>
            <Sidebar/>
            <Feed/>
            <Widget/>
          </div>
        </div>
    </div>
  )
}

export default Quora