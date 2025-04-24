import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Loader2Icon } from 'lucide-react';

function QuestionList({ formData }) {
  const [loading, setLoading] = useState(true);
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    if (formData) {
      generateQuestionList();
    }
  }, [formData]);

  const generateQuestionList = async () => {
    setLoading(true);
    try {
      const result = await axios.post('/api/ai-model', { ...formData });

      const content = result?.data?.content;

      if (!content) {
        throw new Error('No content received from server');
      }

      // Fix formatting errors in content if needed
      const fixedJson = content
        .replace(/(['"])?question(['"])?:/g, '"question":')
        .replace(/(['"])?type(['"])?:/g, '"type":');

      let parsed = {};
      try {
        parsed = JSON.parse(fixedJson);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        throw new Error('Failed to parse questions');
      }

      const questions = parsed?.interviewQuestions || [];

      if (!Array.isArray(questions) || questions.length === 0) {
        throw new Error('No valid interview questions found');
      }

      setQuestionsList(questions);
      setLoading(false);
    } catch (e) {
      console.log(e);
      toast('Server Error, Try Again!');
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex flex-col items-center gap-4 p-5 bg-blue-50 rounded-xl border border-gray-100">
          <Loader2Icon className="animate-spin h-6 w-6 text-blue-500" />
          <div>
            <h2 className="text-lg font-medium">Generating Interview Questions</h2>
            <p className="text-sm text-gray-600">
              Our AI is crafting personalized questions based on your job position.
            </p>
          </div>
        </div>
      ) : questionsList?.length > 0 ? (
        <div className="p-5 border border-gray-300 rounded-xl mt-4">
          {questionsList.map((item, index) => (
            <div key={index} className="p-3 border border-gray-200 rounded-xl mb-2">
              <h2 className="font-medium">{item.question}</h2>
              <h2>Type: {item?.type}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No questions generated.</p>
      )}
    </div>
  );
}

export default QuestionList;
