import React from 'react';
import { IoPlay } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({title, overview}) => {
 
  if(! title  && overview) return;
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 text-white absolute bg-gradient-to-r from-black ">
        <h1 className="text-4xl font-bold ">{title}</h1>
        <p className='py-6 text-lg lg:w-4/12 sm:w-3/4'>{overview}</p>
      <div>
        <button className='bg-white text-black px-8  p-4  text-xl hover: bg-opacity-80 rounded-lg font-semibold'><IoPlay className='inline-block mr-1'/>Play</button>
        <button className='mx-2 text-black bg-white p-4 px-6 text-xl bg-opacity-80 rounded-lg font-semibold'><IoInformationCircleOutline className='inline-block mr-1'/>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
