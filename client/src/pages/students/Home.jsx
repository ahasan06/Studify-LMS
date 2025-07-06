import React from 'react'
import Hero from '../../components/students/Hero'
import Companies from './../../components/students/Companies';

function Home() {
  return (
    <div className='flex flex-col items-center space-y-7'>
      <Hero/>
      <Companies/>

    </div>
  )
}

export default Home
