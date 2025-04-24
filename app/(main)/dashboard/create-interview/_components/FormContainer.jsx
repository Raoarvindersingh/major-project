'use client';

import React, { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { InterviewType } from '@/services/constants';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'; // Assuming your project wraps Radix UI

function FormContainer({ onHandleInputChange, GoToNext }) {
  const [selectedInterviewTypes, setSelectedInterviewTypes] = useState([]);
  const [jobPosition, setJobPosition] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [duration, setDuration] = useState('');

  // Debounced updates
  useEffect(() => {
    const timer = setTimeout(() => {
      if (jobPosition.trim()) {
        onHandleInputChange('JobPosition', jobPosition);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [jobPosition]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (jobDescription.trim()) {
        onHandleInputChange('JobDescription', jobDescription);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [jobDescription]);

  useEffect(() => {
    if (duration) {
      onHandleInputChange('duration', duration);
    }
  }, [duration]);

  useEffect(() => {
    if (selectedInterviewTypes.length > 0) {
      onHandleInputChange('type', selectedInterviewTypes);
    }
  }, [selectedInterviewTypes]);

  const toggleInterviewType = (type) => {
    setSelectedInterviewTypes((prev) => {
      const exists = prev.some((item) => item.title === type.title);
      return exists
        ? prev.filter((item) => item.title !== type.title)
        : [...prev, type];
    });
  };

  return (
    <div className="p-5 bg-white rounded-xl">
      {/* Job Position */}
      <div>
        <h2 className="text-sm font-medium">Job Position</h2>
        <Input
          placeholder="e.g. Full Stack Developer"
          className="mt-2 border border-black"
          value={jobPosition}
          onChange={(e) => setJobPosition(e.target.value)}
        />
      </div>

      {/* Job Description */}
      <div className="mt-5">
        <h2 className="text-sm font-medium">Job Description</h2>
        <Textarea
          placeholder="Enter detailed job description"
          className="h-[200px] mt-2 border border-black"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>

      {/* Interview Duration */}
      <div className="mt-5">
        <h2 className="text-sm font-medium">Interview Duration</h2>
        <Select onValueChange={(value) => setDuration(value)}>
          <SelectTrigger className="w-full mt-2">
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

      {/* Interview Type */}
      <div className="mt-5">
        <h2 className="text-sm font-medium">Interview Type</h2>
        <div className="flex gap-3 flex-wrap mt-2">
          {InterviewType.map((type, index) => {
            const isSelected = selectedInterviewTypes.some((item) => item.title === type.title);
            return (
              <div
                key={index}
                className={`flex items-center cursor-pointer gap-2 p-1 px-2 border border-black rounded-2xl hover:bg-secondary ${
                  isSelected ? 'bg-blue-800 text-white' : 'bg-white text-black'
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

      {/* Next Step */}
      <div className="mt-7 flex justify-end">
        <Button onClick={GoToNext}>
          Generate Question <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
}

export default FormContainer;
