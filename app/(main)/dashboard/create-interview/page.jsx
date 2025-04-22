"use client"
import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import FormContainer from './_components/FormContainer'
import React, { useState } from 'react'

function CreateInterview() {
    const router=useRouter();
    const [step, setStep] = useState(1);
    const [formData,setFormData]=useState();
    const onHandleInputChange=(field,value)=>{
      setFormData(prev=>({
        ...prev,
        [field]:value
      }))
    } 
  return (
    <div className='mt-5 px-5 md:px-20 lg:px-34 xl:px-46'> 
        <div className='flex gap-5 items-center'>
            <ArrowLeft onClick={() => router.back()} className='cursor-pointer'/>
            <h2 className='font-bold text-2xl'>Create New Interview</h2>
            
        </div>
        <Progress value={step * 33.33} className='my-5'/>
        <FormContainer onHandleInputChange={onHandleInputChange} />

    </div>

    
  )
}

export default CreateInterview