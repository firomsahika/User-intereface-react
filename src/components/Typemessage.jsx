import React from 'react'
import { FaPaperclip, FaImage} from 'react-icons/fa'

const Typemessage = () => {
    const iconStyle = {
        color:'#6366F1'
    }
    
  return (
    <div className='py-2 px-4 h-20 md:h-16 bg-gray-200 flex items-center justify-between  border-t-2 border-l-2 border-gray-300 '>
      <input type='text' placeholder='Enter a message ...' className='outline-none w-[80%]  placeholder:text-sm rounded-lg bg-gray-300 px-2 py-2 md:my-6 placeholder:text-gray-600  '/>
      <div className='flex items-center justify-center gap-4 mr-4'>
        <FaPaperclip style={iconStyle} size={20}/>
        <input type='file' className='hidden md:hidden'/>
        <label htmlFor='file'>< FaImage style={iconStyle} size={20}/></label>
        <button className='text-white p-2 rounded-lg bg-cyan-600 text-sm cursor-pointer'>Send</button>
      </div>
    </div>
  )
}

export default Typemessage
