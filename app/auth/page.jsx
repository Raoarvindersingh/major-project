"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseclient'
import { DraftModeProvider } from 'next/dist/server/async-storage/draft-mode-provider'


function Login() {

  const signInWithGoogle=async()=>{
    const {error}=await supabase.auth.signInWithOAuth({
      provider:'google'
    })

    if(error)
      {
            console.error('Error:',error.message)
      }
  }
  return (
         <div className='flex flex-col items-center justify-center
         h-screen'>
        
            
                <Image src={'/logo.png'} alt='logo'width={200}height={90} className='w-[100px]'
              />
              <div className='flex flex-col items-center border rounded-2xl p-8'>
                <Image src={'/login.png'} alt='login'
                width={500}
                height={300}
                className='w-[100px]h- [100px] rounded-2xl' 
                />
                <h2 className='tect-2xl font-bold text-center mt-5'>Welcome to AiCruiter </h2>
                <p className='text-gray-500  text-center'>Sign In with Google Authentication</p>
              <Button className='mt-7 w-full' onClick={signInWithGoogle} > Login with Google</Button>
            </div>
          </div>
  )
}

export default Login