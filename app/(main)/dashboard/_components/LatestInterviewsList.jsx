"use client"
import React,{useState} from 'react'
import  { Button } from '@/components/ui/Button';
import {Camera,  Video } from 'lucide-react';

function LatestInterviewsList() {
    const [interviewList,setInterviewList] = useState([]);
  return (
    <div className='m-5'>
        <h2 className='font-bold text-2xl'>previously Created Interviews</h2>

        {interviewList?.length == 0 &&
        <div className='p-5 flex flex-col gap-3 item-center bg-white mt-5'> 
        <Video className='h-10 w-10 text-primary' />
        <h2>You don't have any interview created!</h2>
        <Button>+ Create New In terview</Button> 
        </div>}
    </div>
  )
}

export default LatestInterviewsList