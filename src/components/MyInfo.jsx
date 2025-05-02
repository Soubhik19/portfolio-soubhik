import React from 'react'
import './MyInfo.css'

const MyInfo = () => {
  return (
    
<div className="flex items-center justify-center font-bold text-gray-900">
    <div className=" text-center space-y-4">
        <div className="text-center text-5xl font-bold">
            Services offered &nbsp;
            <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
            <span className="animate-word col-span-full row-span-full"> ReactJS</span>
            <span className="animate-word-delay-1 col-span-full row-span-full"> NodeJS</span>
            <span className="animate-word-delay-2 col-span-full row-span-full"> Tailwind</span>
            <span className="animate-word-delay-3 col-span-full row-span-full"> ReactJS</span>
            <span className="animate-word-delay-4 col-span-full row-span-full"> NextJS</span>
            </div>
        </div>
        <p className=" ext-gray-900">
            Want to hire me for work ping me <a className="underline" href="mailto:soubhiksamanta19@gmail.com">mail here</a>
        </p>
    </div>
    </div>

  )
}

export default MyInfo

