import React from 'react'
import Assets from "../assets/img/assets.png";

function CommonBookedAssets() {
  return (
    < >
        <div className="flex items-center flex-col space-y-2 mx-4 mb-8">
        <img src={Assets} className="rounded-lg" alt="" />
        <h1 className="font-bold text-lg">Something Here</h1>
        <p className="text-sm text-gray-700 mt-0">Date - Date</p>
      </div>
    </>
  )
}

export default CommonBookedAssets