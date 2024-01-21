import React from 'react'
import Duresa from "../Assets/add-user.png"
import bg from "../Assets/profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Search = () => {
  
  const style = {
    color:'#6366F1',
    fontSize:'20px'
  }
  
  return (
    <div className=' pb-4  text-gray-200     bg-cyan-600'>
  
      <div className='md:px-2 py-2 '>
      <label className='bg-slate-200 px-4  text-sm flex items-center rounded-lg text-gray-600 outline-none w-8 md:w-80 '>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={style} className='hidden md:flex'/>
        <input type='text' placeholder=' Find user' className=' border-none rounded-lg placeholder:text-lg md:placeholder:text-sm placeholder:text-gray-600  bg-slate-200 md:px-4 py-4 text-sm text-gray-600 outline-none w-36 md:w-80 '        
        />
        </label>
      </div>

      <div className='px-2 py-4 mx-4  hover:rounded-lg hover:bg-gray-300 hover:text-gray-800 flex items-center text-sm gap-2 text-slate-200 font-bold cursor-pointer '>
        <img src={bg} alt="" className='w-10 h-10 rounded-full'/>
        <div>
          <span>Duresa</span>
        </div>
      </div>
    </div>
  )
}

export default Search

