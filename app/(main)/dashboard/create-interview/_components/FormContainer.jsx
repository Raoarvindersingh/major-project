'use client';

import React, { useState, useEffect } from 'react';
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import dynamic from "next/dynamic";
import { Input } from '@/components/ui/input';
import { InterviewType } from '@/services/constants';

function FormContainer({ onHandleInputChange }) {
  const [selectedInterviewTypes, setSelectedInterviewTypes] = useState([]);
   
  
  useEffect(() => {
    
    onHandleInputChange('type', selectedInterviewTypes);
  }, [selectedInterviewTypes, onHandleInputChange]);

  const toggleInterviewType = (type) => {
    const isSelected = selectedInterviewTypes.includes(type.title);
    if (!isSelected) {
      setSelectedInterviewTypes((prev) => [...prev, type]);
    } else {
      const updatedList = selectedInterviewTypes.filter((item) => item !== type.title);
      setSelectedInterviewTypes(updatedList);
    }
  };

  return (
    <div className="p-5 bg-white rounded-xl">
      <div>
        <h2 className="text-sm font-medium">Job Position</h2>
        <Input
          placeholder="e.g. Full Stack Developer"
          className="mt-2 border border-black"
          onChange={(event) =>
            onHandleInputChange('JobPosition', event.target.value)
          }
        />
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium">Job Description</h2>
        <Textarea
          placeholder="Enter detailed job description"
          className="h-[200px] mt-2 border border-black"
          onChange={(e) =>
            onHandleInputChange('JobDescription', e.target.value)
          }
        />
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium">Interview Duration</h2>
        <Select onValueChange={(value) => onHandleInputChange('duration', value)}>
          <SelectTrigger className="w-[180px] border border-black">
            <SelectValue placeholder="Select Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5 Min">5 Min</SelectItem>
            <SelectItem value="15 Min">15 Min</SelectItem>
            <SelectItem value="30 Min">30 Min</SelectItem>
            <SelectItem value="45 Min">45 Min</SelectItem>
            <SelectItem value="60 Min">60 Min</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium">Interview Type</h2>
        <div className="flex gap-3 flex-wrap mt-2">
          {InterviewType.map((type, index) => (
            <div
              key={index}
              className={`flex items-center cursor-pointer gap-2 p-1 px-2 border border-black rounded-2xl hover:bg-secondary ${
                selectedInterviewTypes.includes(type.title)
                  ? 'bg-black-50 text-pr'
                  : 'bg-blue-800 text-white'
              }`}
              onClick={() => toggleInterviewType(type)}
            >
              <type.icon className="h-4 w-4" />
              <span>{type.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex justify-end">
        <Button>
          Generate Question <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default FormContainer;
