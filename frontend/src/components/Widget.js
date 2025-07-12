import React from 'react'
import WidgetContents from './WidgetContents'
import'./css/Widget.css';

function Widget() {
  return (
    <div className='widget'>
        <div className='widget__header'>
            <h5> Space to follow</h5>
        </div>
        <div className='widget__contents'>
            <WidgetContents/>
        </div>
    </div>
    

  )
}

export default Widget