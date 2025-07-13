import React from 'react'
import { assets } from '../../assets/assets'

function CallToAction() {
  return (
    <div className='flex flex-col items-center pb-24 gap-4 px-8'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm text-center'>Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
      <div className='flex items-center gap-4'>
        <button className='bg-blue-600 text-white px-6 py-3 rounded'>Get Started</button>
        <button className='flex items-center gap-2 font-medium'>Learn More <img src={assets.arrow_icon} alt="arrow icon" /></button>
      </div>
    </div>
  )
}

export default CallToAction
