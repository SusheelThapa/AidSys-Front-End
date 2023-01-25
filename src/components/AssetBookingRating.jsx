import React from 'react'

function AssetBookingRating() {
  return (
    <div>
        <div className='flex justify-between px-20 space-x-8 xl:space-x-28'>
        {/* div for previous bookings */}
            <div className='w-3/5'>
                <h2 className='text-3xl text-assets-100 font-bold font-serif'>PREVIOUS BOOKINGS</h2>
                    {/*div for booking name  */}
                <div className='flex flex-col space-y-4 p-4 xl:p-40 rounded-xl border shadow-lg mt-8'>
                    <div className='flex justify-between hover:shadow-2xl h-20 p-4'>
                        <p className='text-2xl text-gray-500'>1. Person 1</p>
                        <p className='text-2xl text-gray-500'>Date: 20XX/XX/XX</p>
                    </div>
                    <div className='flex justify-between hover:shadow-2xl h-20 p-4'>
                        <p className='text-2xl text-gray-500'>2. Person 2</p>
                        <p className='text-2xl text-gray-500'>Date: 20XX/XX/XX</p>
                    </div>
                    <div className='flex justify-between hover:shadow-2xl h-20 p-4'>
                        <p className='text-2xl text-gray-500'>3. Person 3</p>
                        <p className='text-2xl text-gray-500'>Date: 20XX/XX/XX</p>
                    </div>
                    <div className='flex justify-between hover:shadow-2xl h-20 p-4'>
                        <p className='text-2xl text-gray-500'>4. Person 4</p>
                        <p className='text-2xl text-gray-500'>Date: 20XX/XX/XX</p>
                    </div>
                </div>
            </div>
            {/* div for ratings */}
            <div className='w-2/5'>
                <h2 className='text-3xl text-assets-100 font-bold font-serif'>RATINGS</h2>
            </div>
        </div>
    </div>
  )
}

export default AssetBookingRating