import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

function Hero() {
  return (
    <div className='bg-gradient-to-b from-cyan-100/70  items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center'>
      <h1 className='relative md:text-home-heading-large text-home-heading-small font-bold text-gray-800 w-fit  mx-auto '>Become an IT Pro & Rule the
        <span className='text-blue-600'> Digital World </span>
        <img src={assets.sketch} alt="sketch" className='absolute right-0 -bottom-7' />
      </h1>
      <p className=' text-gray-500 max-w-2xl mx-auto'>
        With a vision to turn manpower into assets, Creative IT Institute is ready to enhance your learning experience with skilled mentors and an updated curriculum. Pick your desired course from more than 45 trendy options.
      </p>
      <SearchBar/>
    </div>
  )
}

export default Hero
