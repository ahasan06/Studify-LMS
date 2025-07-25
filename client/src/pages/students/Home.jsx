import React from 'react'
import Hero from '../../components/students/Hero'
import Companies from './../../components/students/Companies';
import CourseDetails from './CourseDetails';
import CourseSection from '../../components/students/CourseSection';
import TestimonialSection from '../../components/students/TestimonialSection';
import CallToAction from '../../components/students/CallToAction';
import Footer from '../../components/students/Footer';

function Home() {
  return (
    <div className='flex flex-col items-center space-y-7'>
      <Hero/>
      <Companies/>
      <CourseSection/>
      <TestimonialSection/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home
