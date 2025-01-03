import React, { useState }from 'react'
import './VideoSideBar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

function VideoSideBar({likes, comments, shares}) {
  const [liked, setLiked] = useState(false);
  return (
    <div className='videoSideBar'>
      <div className='videoSideBar_button'>
        {liked? (
          <FavoriteIcon fontSize="large"
          onClick={(e) => setLiked(false)} />
        ): (
          <FavoriteBorderIcon fontSize="large"
          onClick={(e) => setLiked(true)} />
          )}
        <p>{liked? likes + 1: likes}</p>
      </div>

      <div className='videoSideBar_button'>
        <MessageIcon fontSize="large"/>
        <p>{comments}</p>
      </div>

      <div className='videoSideBar_button'>
        <ShareIcon fontSize="large"/>
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSideBar
