import React from 'react'
import Messsage from './Messsage'

const Messages = () => {
  return (
    <div className=' h-[calc(85%-37px)] bg-white text-sm  px-6 py-2 overflow-y-scroll  [&::-webkit-scrollbar]:hidden  relative'>
      <Messsage curr_user = {true} message="Hi!" />
      <Messsage message="hello!" />
      <Messsage curr_user = {true} message="who is this?" />
      <Messsage message="Duresa from high school!" />
      <Messsage curr_user = {true} message="hey man how are you" />
      <Messsage message="i'm fine" />
      <Messsage curr_user = {true} message="nice, so whats's up with you" />
      <Messsage message="I was oing to ask you for somthing, can I call you?" />
      <Messsage curr_user = {true} message="yeh, anytime" />
    </div>
  )
}

export default Messages
