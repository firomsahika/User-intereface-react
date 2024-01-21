import React from 'react'
import myProfile from "../Assets/profile.jpg"
import firo from "../Assets/firo.jpg"

const Messsage = ({curr_user, message}) => {
  return (
    <div className={` ${curr_user ? "" : "flex-row-reverse"} flex items-center gap-10 py-4 text-sm `}>
      <div>
        <img src={firo} className='w-10 h-10 rounded-full'/>
        
      </div>
      <div className='max-w-[80%] flex flex-col gap-2'>
        <p className='bg-cyan-600 text-white px-4 py-4 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-xl max-w-fit   shadow-lg'>{message}</p>

        <span className='text-gray-500 text-sm'>Just now</span>
        {/* <img src={myProfile} className='w-[25%] p-2 '/> */}
      </div>
    </div>
  )
}

export default Messsage
