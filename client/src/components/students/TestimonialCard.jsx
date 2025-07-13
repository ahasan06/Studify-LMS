import React from 'react'
import { assets } from '../../assets/assets'
function TestimonialCard({testimonial}) {
  return (
    <div className='testimonial-container shadow min-h-60  border rounded-lg overflow-hidden'>
      <div className='bg-gray-100 p-5 min-h-20 flex items-center gap-3'>
        <img src={testimonial.image} alt="profile" height={50} width={50}/>
        <div>
            <h4 className='text-lg font-medium text-gray-700'>{testimonial.name}</h4>
            <h6 className='text-sm text-gray-700'>{testimonial.role}</h6>
        </div>
      </div>
      <div className=' h-full w-full p-5 flex flex-col items-start gap-5 '>
     
        <div className='flex'>
        {
            [...Array(5)].map((_,i)=>(
                <img key={i} src={i< Math.floor(testimonial.rating)?assets.star : assets.star_blank} alt="star" srcset="" />
            ))
        }
        </div>
        <p className=' text-gray-600'>{testimonial.feedback}</p>
        <button onClick={()=>scrollTo(0,0)}><a href="" className='underline text-blue-500 hover:text-blue-700'>Read more</a></button>
      </div>    
    </div>
  )
}

export default TestimonialCard
