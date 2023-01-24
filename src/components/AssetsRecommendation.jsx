import React from 'react'
import CommonRecommendation from './CommonRecommendation'

function AssetsRecommendation() {
  return (
    <div>
        <p className='text-assets-100 font-bold font-serif text-3xl mt-32 mb-8 mx-10'>RECOMMENDED FOR YOU</p>
    <div className='flex'>
        <CommonRecommendation/>
        <CommonRecommendation/>
        <CommonRecommendation/>
        <CommonRecommendation/>
        <CommonRecommendation/>
        <CommonRecommendation/>
        <CommonRecommendation/>
       
    </div>
    </div>
  )
}

export default AssetsRecommendation