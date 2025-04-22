'use client';

import React, { useState, useEffect, useCallback} from 'react';
import { Textarea } from "@/components/ui/textarea";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import dynamic from "next/dynamic";
import { Input } from '@/components/ui/input';
import { InterviewType } from '@/services/constants';

function FormContainer({ onHandleInputChange }) {
  const [selectedInterviewTypes, setSelectedInterviewTypes] = useState([]);
  const [jobPosition, setJobPosition] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [duration, setDuration] = useState('');
 

  // Memoize the callback to prevent unnecessary effect triggers
  const stableOnHandleInputChange = useCallback(onHandleInputChange, []);

  useEffect(() => {
    if (jobPosition.trim() !== '') {
      const timer = setTimeout(() => {
        stableOnHandleInputChange('JobPosition', jobPosition);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [jobPosition, stableOnHandleInputChange]);

  useEffect(() => {
    if (jobDescription.trim() !== '') {
      const timer = setTimeout(() => {
        stableOnHandleInputChange('JobDescription', jobDescription);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [jobDescription, stableOnHandleInputChange]);

  useEffect(() => {
    if (duration) {
      stableOnHandleInputChange('duration', duration);
    }
  }, [duration, stableOnHandleInputChange]);

  useEffect(() => {
    if (selectedInterviewTypes.length > 0) {
      stableOnHandleInputChange('type', selectedInterviewTypes);
    }
  }, [selectedInterviewTypes, stableOnHandleInputChange]);

  const toggleInterviewType = (type) => {
    setSelectedInterviewTypes(prev => {
      const isSelected = prev.some(item => item.title === type.title);
      if (isSelected) {
        return prev.filter(item => item.title !== type.title);
      } else {
        return [...prev, type];
      }
    });
  };

  return (
    <div className="p-5 bg-white rounded-xl">
      <div>
        <h2 className="text-sm font-medium">Job Position</h2>
        <Input
          placeholder="e.g. Full Stack Developer"
          className="mt-2 border border-black"
          value={jobPosition}
          onChange={(event) => setJobPosition(event.target.value)}
        />
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium">Job Description</h2>
        <Textarea
          placeholder="Enter detailed job description"
          className="h-[200px] mt-2 border border-black"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>

      <div className="mt-5">
  <h2 className="text-sm font-medium">Interview Duration</h2>
  <div className="relative mt-2">
    <select
      value={duration}
      onChange={(e) => setDuration(e.target.value)}
      className="appearance-none w-full md:w-[180px] border border-black rounded-md px-3 py-2 pr-8 focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
      <option value="">Select Duration</option>
      <option value="5 Min">5 Min</option>
      <option value="15 Min">15 Min</option>
      <option value="30 Min">30 Min</option>
      <option value="45 Min">45 Min</option>
      <option value="60 Min">60 Min</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
</div>

      <div className="mt-5">
        <h2 className="text-sm font-medium">Interview Type</h2>
        <div className="flex gap-3 flex-wrap mt-2">
          {InterviewType.map((type, index) => {
            const isSelected = selectedInterviewTypes.some(item => item.title === type.title);
            return (
              <div
                key={index}
                className={`flex items-center cursor-pointer gap-2 p-1 px-2 border border-black rounded-2xl hover:bg-secondary ${
                  isSelected
                    ? 'bg-blue-800 text-white'
                    : 'bg-white text-black'
                }`}
                onClick={() => toggleInterviewType(type)}
              >
                <type.icon className="h-4 w-4" />
                <span>{type.title}</span>
              </div>
            );
          })}
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