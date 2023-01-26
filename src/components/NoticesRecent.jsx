import React from 'react'

function NoticesRecent(props) {
  return (
    <>
        <div className='rounded-xl border mx-10 shadow-2xl'>
            <div className='flex flex-col'>
                <div>
                    <h1 className='text-2xl font-bold font-serif mt-12 px-4 text-assets-100' >{props.title}</h1>
                </div>
                <div className='flex flex-col p-4 mb-[26px]'>
                    <h1 className='font-serif hover:text-indigo-400 cursor-pointer text-assets-100 font-bold text-xl'>Notice Regarding Something</h1>
                    <div className='flex justify-between mt-2'>
                        <p className='text-sm text-gray-500'>Person Name</p>
                        <p className='text-sm text-gray-500'>Date: Date</p>
                    </div>
                </div>
                <div className='flex flex-col p-4 mb-[26px]'>
                    <h1 className='font-serif hover:text-indigo-400 cursor-pointer text-assets-100 font-bold text-xl'>Notice Regarding Something</h1>
                    <div className='flex justify-between mt-2'>
                        <p className='text-sm text-gray-500'>Person Name</p>
                        <p className='text-sm text-gray-500'>Date: Date</p>
                    </div>
                </div>
                <div className='flex flex-col p-4 mb-[26px]'>
                    <h1 className='font-serif hover:text-indigo-400 cursor-pointer text-assets-100 font-bold text-xl'>Notice Regarding Something</h1>
                    <div className='flex justify-between mt-2'>
                        <p className='text-sm text-gray-500'>Person Name</p>
                        <p className='text-sm text-gray-500'>Date: Date</p>
                    </div>
                </div>
                <div className='flex flex-col p-4 mb-[26px]'>
                    <h1 className='font-serif hover:text-indigo-400 cursor-pointer text-assets-100 font-bold text-xl'>Notice Regarding Something</h1>
                    <div className='flex justify-between mt-2'>
                        <p className='text-sm text-gray-500'>Person Name</p>
                        <p className='text-sm text-gray-500'>Date: Date</p>
                    </div>
                </div>
                <div className='flex flex-col p-4 mb-[26px]'>
                    <h1 className='font-serif hover:text-indigo-400 cursor-pointer text-assets-100 font-bold text-xl'>Notice Regarding Something</h1>
                    <div className='flex justify-between mt-2'>
                        <p className='text-sm text-gray-500'>Person Name</p>
                        <p className='text-sm text-gray-500'>Date: Date</p>
                    </div>
                </div>
            </div>
        </div>
    </>  
  )
}

export default NoticesRecent