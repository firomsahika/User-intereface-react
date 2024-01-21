import React from 'react'
import { useState } from 'react';

const Forgotpassword = () => {
 
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleEmailChange  = (event) =>{
    setEmail(event.target.value);
  }
  const handlePasswordChange  = (event) =>{
    setPassword(event.target.value);
  }


  return (
    <div className='h-screen w-full  my-20 md:my-0 flex flex-col md:flex-row items-center justify-center bg-cyan-600   gap-10 '>
        <div className='flex flex-col items-center bg-white h-80 rounded-2xl shadow-lg  justify-center w-full md:w-1/3 text-black px-10 py'>
                <span 
                className='text-4xl my-4 text-cyan-600 font-bold'
                >Forgot password</span>
                <p className='my-4  flex position-start font-semibold'>Email</p>
                <form className='flex flex-col gap-4 md:ml-10 '>
                    <label className='relative '>
                        
                        <input
                        className='bg-gray-200 px-6 py-4 w-80 text-xl rounded-lg  outline-none  border-2 border-white focus:border-cyan-600 focus:text-black focus:bg-white'
                        type='email' 
                    
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleEmailChange}
                        value={email}
                        
                        />        
                        <span className={`text-xl text-gray-400 text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 email-text
                        
                        ${isFocused || email ? 'text-md text-cyan-600 bg-white transform -translate-y-8 -translate-x-2 scale-75' : 'text-base bg-gray-200 text-gray-500'}
                        ${ isFocused ? 'text-cyan-600 bg-white transform -translate-y-8 -translate-x-2 scale-75' : ''} 
                        
                        `}
                        
                        >enter your email</span>
                    </label>
                </form>
                <button
            className='bg-cyan-600 px-2 mr-4  py-2 my-4 text-white mx-14 w-60  rounded-lg  font-bold hover:scale-105 duration-200 '
            >Submit</button>
        </div>
   </div>
 )
}

export default Forgotpassword
