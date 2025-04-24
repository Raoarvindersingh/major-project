'use client';

import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import FormContainer from './_components/FormContainer';
import QuestionList from './_components/QuestionList';
import React, { useState } from 'react';
import { toast } from 'sonner';

function CreateInterview() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    console.log('formData', formData);
  };

  const onGOtoNext = () => {
    if (
      !formData?.JobPosition ||
      !formData?.JobDescription ||
      !formData?.duration ||
      !formData?.type
    ) {
      toast('Please fill all the details!');
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="mt-5 px-5 md:px-20 lg:px-34 xl:px-46">
      <div className="flex gap-5 items-center">
        <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />
        <h2 className="font-bold text-2xl">Create New Interview</h2>
      </div>

      <Progress value={step * 33.33} className="my-5" />

      {step === 1 ? (
        <FormContainer
          onHandleInputChange={onHandleInputChange}
          GoToNext={() => onGOtoNext()}
        />
      ) : step === 2 ? 
        <QuestionList formData={formData}/>
       : null}
    </div>
  );
}

export default CreateInterview;
