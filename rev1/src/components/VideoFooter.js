import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({channel, description}) {
  return (
    <div className='videoFooter'> 
       <div className='videoFooter_text'>
            <h3>@{channel}</h3>
            <p>This is some description</p>

            <div className='videoFooter_ticker'>
              <MusicNoteIcon className='videoFooter_ivon'/>
            </div>
       </div>
    </div>
  )
}

export default VideoFooter
