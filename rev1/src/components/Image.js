import React from 'react'
import './Image.css'
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';
import Pdf_display from '../pages/Pdf_display';
import img1 from './img1.png'

function Image() {
  return (
    <div className='image'>
        <img
            src={img1}
            className='image_viewer'>
        </img>
        <Pdf_display />
        <VideoFooter channel={'bob'}/>
        <VideoSideBar likes={100} comments={0} shares={0} />
    </div>
  )
}

export default Image
