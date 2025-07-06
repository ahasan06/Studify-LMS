import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

function SearchBar({ data }) {
    const navigate = useNavigate()
    const [input, setInput] = useState(data ? data : '')

    const onSearchHandler = (e) => {
        e.preventDefault()
        if (input.trim()) {
            navigate('/course-list/' + input)
        }

    }
    const onInputChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <div>
            <form onSubmit={onSearchHandler} className='flex items-center justify-between max-w-xl border rounded mx-auto md:h-14 h-12 '>
                <img src={assets.search_icon} alt="search_icon" className='md:w-auto w-10 px-3 ' />
                <input onChange={onInputChange} value={input} type="text" placeholder='Search for courses' className='w-full h-full outline-none text-gray-500/80' />
                <button type='submit' className='bg-blue-600 md:px-10 px-7 md:py-3 py-2 mx-1 text-white rounded'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar
