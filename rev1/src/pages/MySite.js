import Header from '../components/Header'
import Image from '../components/Image'
import NavBar from '../components/NavBar';
import './MySite.css'

import React from 'react'

function MySite() {
  return (
    <div className='mysite'>
      < NavBar/>

        <div className='mysite_image'>
          <Image />
          <Image />
          <Image />
        </div>
        
    </div>
  )
}

export default MySite
