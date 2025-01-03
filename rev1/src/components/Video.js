import React, { useRef, useState } from 'react';
import "./Video.css";
import vid from './videos/vid3.mp4';
import vid1 from './videos/vid1.mp4';
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';



function Video() {

 const [playing, setPlaying] = useState(false);
 const videoRef = useRef(null);

 const handleVideoPress= () => {
    //if video is playing stop it
     if (playing){
        videoRef.current.pause();
        setPlaying(false);
     } else {
        videoRef.current.play();
        setPlaying(true);
     }

    //otherwise if it is not playing play it
 }

  return (
    <div className='video '>
       <video 
          src={vid} 
          className='video_player' 
          loop 
          ref={videoRef}
          onClick={handleVideoPress}>
       </video>
       
       <VideoFooter channel={'bob'}/>
       <VideoSideBar likes={100} comments={0} shares={0} />
       {/* VideoSideBar*/}
    </div>
  )
}

export default Video
