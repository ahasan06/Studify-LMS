import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import TestimonialCard from './TestimonialCard';

function TestimonialSection() {
  const { testimonial } = useContext(AppContext)
  console.log("Testimonial",testimonial);
  
  return (
    <div className='py-14 px-8  flex flex-col items-center max-w-5xl'>
      <h2 className='text-3xl font-semibold text-gray-700'>Testmonials</h2>
      <p className='md:text-base text-gray-500 mt-3 text-center max-w-3xl'>Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.</p>
     <div className='mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
       {
        testimonial && testimonial.length > 1 ? (
          testimonial.map((testimonial ,index)=>(
            <TestimonialCard key={index} testimonial={testimonial}/>
          ))
        ) : (
            <p>No Testimonial found!</p>
        )

      }
     </div>


    </div>
  )
}

export default TestimonialSection
