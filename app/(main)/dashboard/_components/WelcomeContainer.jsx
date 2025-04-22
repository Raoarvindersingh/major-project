"use client"
import { useUser } from '@/app/(main)/provider'
import Image from 'next/image';
import React from 'react'
import Avatar from '@/public/user.png'

function WelcomeContainer() {

  const { user } = useUser();  return (

  <div className='bg-white p-5 rounded-xl    w-full justify-between itens-center'>
     <div >
      <h2 className='text-lg font-bold'>Welcome Back  {user?.name} </h2>
      <h2 className='text-gray-950'>AI-Driven Interviews, Hassle-Free Hiring</h2>
      </div>
    <Image src={Avatar} alt="userAvatar" width={40} height={40} className='rounded-full' />
  </div>
  )
}

export default WelcomeContainer