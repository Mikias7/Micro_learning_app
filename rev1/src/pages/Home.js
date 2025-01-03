import Header from '../components/Header'
import Video from '../components/Video'
import NavBar from '../components/NavBar';
import './Home.css';

import React from 'react'

function Home() {
  return (
    <div className='home'>
        < NavBar/>
        <div className='home_videos'>
            <Video/>
            <Video/>
        </div>
        
        
        {/* app container */}
        {/* videos */}
        {/* app container */}
        {/* <video/> */}
        {/* <video/> */}
        {/* <video/> */}
        {/* <video/> */}
    </div>
  )
}

export default Home
