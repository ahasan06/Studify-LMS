import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

function CourseCard({ course }) {
    const { currency } = useContext(AppContext)
    return (
        <Link to={'/course/' + course._id} onclick={() => scrollTo(0, 0)}
        className='border border-gray-500/30  overflow-hidden rounded-lg '
        >
            <img src={course.courseThumbnail} alt="thumbnail" />
            <div className='p-5 flex flex-col gap-1'>
                <h3>{course.courseTitle}</h3>
                <p>{course.educator.name}</p>
                <div className='flex items-center space-x-2'>
                    <p>4.5</p>
                    <div className='flex'>
                        {
                            [...Array(5)].map((_, i) => (
                                <img key={i} src={assets.star} alt="star" className='w-3.5 h-3.5' />
                            ))
                        }
                    </div>
                    <p className='text-gray-500'>22</p>
                </div>
                <p className='text-base font-semibold text-gray-800'>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
            </div>
        </Link>
    )
}

export default CourseCard
