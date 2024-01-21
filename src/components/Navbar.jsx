import React from 'react'
import myProfile from "../Assets/profile.jpg"
import firo from "../Assets/firo.jpg"
import { FaUserPlus, FaVideo, FaEllipsisH  }  from "react-icons/fa"
const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row   items-center justify-between  py-2 md:px-4  h-24 md:h-16 text-black'>
      <span className='font-bold text-2xl'>Chats</span>

      <div className='flex flex-row   md:flex-col gap-4 items-center justify-end md:hidden '>
        <img  src={ firo } className='bg-white w-10 h-10 rounded-full'/>
        <span>Firo</span>
        <button className='bg-indigo-500 text-white  px-2 py-2 border-none text-sm rounded-lg cursor-pointer' >logout</button>
      </div>
      
    </div>
  )
}

export default Navbar
