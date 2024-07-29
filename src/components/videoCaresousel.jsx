 import React from 'react'
import { highlightFirstVideo } from '../util'
 
 const VideoCaresousel = () => {
   return (
   <>
   <div className='flex items-center'>
    <div id='slider'className="sm:pr-20 pr-10">
<div className='video-carousel_container'>
<div className='w-full h-full flex-center bg-black rounded-3xl overflow-hidden'>
<video >

</video>
 </div>
    </div> 
    </div>
    <div id='slider'>
<div className='video-carousel_container'>
<video >
</video>
    
    </div> 
    </div>
    <div id='slider'className="sm:pr-20 pr-10">
<div className='video-carousel_container'>
    
<video >
</video>
    </div> 
    </div>
    <div id='slider'className="sm:pr-20 pr-10">
<div className='video-carousel_container'>
    
<video >
</video>
    </div> 
    </div>
    <div id='slider'className="sm:pr-20 pr-10">
<div className='video-carousel_container'>
    
    <div className='w-full h-full flex-center bg-black rounded-3xl overflow-hidden'>
    <video >
    </video>
    </div>
    </div> 
    </div>
     </div>
   </>
   )
 }
 
 export default VideoCaresousel