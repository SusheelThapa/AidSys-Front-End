import React from 'react'
import Classroom from "../assets/img/classroom"
function CommonRecommendation() {
  return (
    <div className='flex flex-col items-center container mx-auto'>
        <img src={Classroom} className="h-40 w-40 rounded-lg shadow-lg" alt="" />
        <h1 className='font-bold mt-2'>Something here</h1>
        <p className='text-gray-500 text-sm'>Data - Date</p>
    </div>
  )
}

export default CommonRecommendation