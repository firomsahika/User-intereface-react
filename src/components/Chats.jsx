import React from 'react'
import bg from "../Assets/profile.jpg"

const Chats = () => {
  return (
    <div className='px-4 '>
      <div>
        <p className='text-md font-semibold py-4'>Recent</p>
      </div>
      <div className='p-2  flex items-center gap-2  rounded-md cursor-pointer  hover:bg-gray-300 '>
        <img src={bg} alt="" className='w-10 h-10 rounded-full'/>
        <div >
          <span className='font-bold text-sm text-black'>Duresa</span>
          <p className='text-gray-600 text-sm'>Hello</p>
        </div>
      </div>

      <div className='p-2  flex items-center gap-2 text-slate-200 rounded-md cursor-pointer hover:bg-gray-300'>
        <img src={bg} alt="" className='w-10 h-10 rounded-full'/>
        <div>
          <span className='font-bold text-sm text-black'>Sami</span>
          <p className='text-gray-600 text-sm'>Ok, thankyou</p>
        </div>
      </div>

      <div className='p-2  flex items-center gap-2 text-slate-200 rounded-md cursor-pointer hover:bg-gray-300'>
        <img src={bg} alt="" className='w-10 h-10 rounded-full'/>
        <div>
          <span className='font-bold text-sm text-black'>Sanyi</span>
          <p className='text-gray-600 text-sm'>Hey,Duresa</p>
        </div>
      </div>


    </div>
  )
}

export default Chats
