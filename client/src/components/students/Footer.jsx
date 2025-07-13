import React from 'react'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <footer className='footer__section bg-[#111827] px-8 md:px-36 pt-10'>

      <div className='footer_container grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10'>
        
        <div className='footer_logo flex flex-col  items-center lg:items-start gap-2 lg:gap-5'>
          <img src={assets.logo_dark} alt="logo" />
          <p className='text-sm text-gray-300 text-center md:text-start w-[80%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>

        <div className='footer_menu w-full flex flex-col items-start gap-2 lg:gap-5'>
          <h4 className='menu_title text-white w-full text-center lg:text-start text-lg'>Company</h4>
          <ul className='flex lg:flex-col items-center lg:items-start justify-between w-full text-gray-300 text-sm gap-1'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#" >Contact us</a></li>
            <li><a href="#" >Privacy policy</a></li>
          </ul>
        </div>

        <div className='footer_form flex flex-col items-center lg:items-start gap-2 lg:gap-5 text-center lg:text-start text-gray-300 text-sm'>
          <h4 className='menu_title text-white text-lg'>Subscribe to our newsletter</h4>
          <p >The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className='subscribe_form flex items-center w-full gap-2'>
            <input type="text" placeholder='Enter your email' className='h-full px-4 w-full text-black rounded bg-transparent border ' />
            <button className='bg-blue-600 text-white px-6 py-3 rounded'>Subscribe</button>
          </div>
        </div>
      </div>

      <div className='copyright_section border-t border-t-gray-500 py-4 flex items-center justify-center'>
        <span className='text-[12px] text-gray-400'>Copyright 2025 © Ahasan_h_Nahid. All Right Reserved.</span>
      </div>

    </footer>
  )
}

export default Footer
