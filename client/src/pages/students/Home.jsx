import React from 'react'
import Hero from '../../components/students/Hero'
import Companies from './../../components/students/Companies';
import CourseDetails from './CourseDetails';
import CourseSection from '../../components/students/CourseSection';
import TestimonialSection from '../../components/students/TestimonialSection';

function Home() {
  return (
    <div className='flex flex-col items-center space-y-7'>
      <Hero/>
      <Companies/>
      <CourseSection/>
      <TestimonialSection/>
    </div>
  )
}

export default Home
