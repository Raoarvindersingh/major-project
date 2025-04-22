import { Phone, Video } from 'lucide-react'
import  Link  from 'next/link'
import React from 'react'

function CreatOptions() {
  return (
    <div className='grid grid-cols-2 gap-5'>
        <Link href={'/dashboard/create-interview'} className='bg-white border border-gray-200 rounded-lg p-3 flex flex-col gap-2 cursor-pointer'>
            <Video className='p-3 text-primary bg-blue-50 rounded-lg h-10 w-10'/>
            <h2 className='font-bold'>Creat New Interview</h2>
            <p className='text-gray-500'>Create AI I nterviews and schedule then with candidates</p>
        </Link>
        <div className='bg-white border border-gray-200 rounded-lg p-5'>
            <Phone className='p-3 text-primary bg-blue-50 rounded-lg h-10 w-10'/>
            <h2 className='font-bold'>Creat Phone Screening Call</h2>
            <p className='text-gray-500'>Schedule phone screening call with candidates</p>
        </div>
    </div>
  )
}

export default CreatOptions