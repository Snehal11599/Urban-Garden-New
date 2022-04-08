import React from 'react'
import ReactPlayer from 'react-player';

export default function VideoPlayer()
 {
  return (
    <div className='App'>
      <ReactPlayer 
      width='1790px'
      height='600px'
      controls url="https://www.youtube.com/watch?v=pR0qnY5kgVg"
      onReady={()=>console.log('onReady callBack')}
      onStart={()=>console.log('onStart callBack')}
      onPause={()=>console.log('onPause callBack')}
      onEnded={()=>console.log('onEnded callBack')}
      onError={()=>console.log('onError callBack')}
      />
    </div>
  )
}
