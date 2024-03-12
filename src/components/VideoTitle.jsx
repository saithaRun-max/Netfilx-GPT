import React from 'react'

const VideoTitle = ({title, overview}) => {
 
  if(! title  && overview) return;
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 text-white absolute bg-gradient-to-r from-black ">
        <h1 className="text-4xl font-bold ">{title}</h1>
        <p className='py-6 text-lg w-4/12'>{overview}</p>
      <div>
        <button className='bg-white text-black p-4 px-12 text-xl hover: bg-opacity-80 rounded-lg'>Play</button>
        <button className='mx-2 text-black bg-white p-4 px-12 text-xl bg-opacity-80 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
