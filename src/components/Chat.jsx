import React from 'react'
import { FaUserPlus, FaVideo, FaEllipsisH, FaPhone }  from "react-icons/fa"
import Messages from './Messages';
import profile from '../Assets/profile.jpg'

import Typemessage from './Typemessage';


const chat = () => {
  const iconStyle = {
    color: '#6366F1',
    height: '18px',
    cursor: 'pointer'
  };
  return ( 
      
      <div className=' md:flex-1 bg-white'> 
      <div className='flex  items-center justify-between py-2 px-4 font-bold bg-slate-100 text-black h-20 md:h-16   border-b-2 border-gray-100'>
        <div className='flex items-center justify-center'>
        <img src={profile} className='w-10 -10 rounded-full cursor-pointer'/>
        <span className='text-sm font-bold px-4'>Duresa</span>
        </div>
        <div className='flex gap-4'>
          <FaVideo className='text-cyan-600 h-18 cursor-pointer' size={20}/>
          <FaPhone className='text-cyan-600 h-18 cursor-pointer' size={20}/>
          <FaEllipsisH className='text-cyan-600 h-18 cursor-pointer' size={20}/>
        </div>
      </div>
      <Messages />
      <Typemessage />
    </div>
  )
}

export default chat
