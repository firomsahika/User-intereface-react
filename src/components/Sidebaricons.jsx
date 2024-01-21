import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import firo from "../Assets/firo.jpg"


const Sidebaricons = () => {
  return (
    <div className='w-20 bg-cyan-600 md:flex flex-col items-center justify-center gap-6 hidden border-r-8 border-slate-200'>
      <div className='flex flex-col items-center justify-center gap-10 md:mb-6 md:mt-30 '>
      <FontAwesomeIcon icon={faHouse}   className='cursor-pointer text-white'/>
      <FontAwesomeIcon icon={faMessage}  className='cursor-pointer text-white'/>
      <FontAwesomeIcon icon={faUser}  className='cursor-pointer text-white'/>
      </div>

      <div className='flex flex-col md:flex-col md:hidden gap-4 items-center justify-end '>
        <img  src={ firo } className='bg-white w-10 h-10 rounded-full cursor-pointer'/>
        <span>Firo</span>
        <button className='bg-indigo-500 text-white  px-2 py-2 border-none text-sm rounded-lg cursor-pointer' >logout</button>
      </div>
    </div>

  )
}

export default Sidebaricons
