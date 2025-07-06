import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

function CourseSection() {
    const {allCourses} = useContext(AppContext)
    console.log("add course ",allCourses);
    

    return (
        <div className='flex flex-col items-center justify-center px-8 '>
            <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
            <p className='text-sm md:text-base text-gray-500 mt-3 text-center'>Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.</p>
          

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto gap-5 my-10 '>
               {allCourses && allCourses.length > 0 ? (
                    allCourses.slice(0,4).map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))
                ) : (
                    <p className='text-gray-500'>No courses available at the moment.</p>
                )}
                      
            </div>
          
            <Link to={'/course-list'} onClick={() => scrollTo(0, 0)}
                className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'
            >
                Show all courses
            </Link>
        </div>
    )
}

export default CourseSection
