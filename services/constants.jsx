import {
    LayoutDashboard,
    Calendar,
    WalletCards,
    List,
    Settings,
    BriefcaseBusinessIcon,
    Puzzle,
    User2Icon,
    Code2Icon,
    UserIcon,
  } from "lucide-react";
  
  export const SideBarOption = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
    },
    {
      name: 'Scheduled Interview',
      icon: Calendar,
      path: '/scheduled-interview',
    },
    {
      name: 'All Interview',
      icon: List,
      path: '/all-interview',
    },
    {
      name: 'Billing',
      icon: WalletCards,
      path: '/billing',
    },
    {
      name: 'Setting',
      icon: Settings,
      path: '/setting',
    },
  ];
  
  export const InterviewType = [
    {
      title: 'Technical',
      icon: Code2Icon,
    },
    {
      title: 'Behavioral',
      icon: UserIcon,
    },
    {
      title: 'Experience',
      icon: BriefcaseBusinessIcon,
    },
    {
      title: 'Problem Solving',
      icon: Puzzle,
    },
    {
      title: 'Leadership',
      icon: User2Icon,
    },
  ];
  
  export const QUESTIONS_PROMPT = `You are an expert technical interviewer.
  Based on the following inputs, generate a well-structured list of high-quality interview questions:
  
  Job Title: {{jobTitle}}
  
  Job Description: {{jobDescription}}
  
  Interview Duration: {{duration}}
  
  Interview Type: {{type}}
  
  Your task:
  
  - Analyze the job description to identify key responsibilities, required skills, and expected experience.
  - Generate a list of interview questions tailored to the interview type and duration.
  - Adjust the number and depth of questions to match the given interview duration.
  - Ensure the questions reflect the tone and structure of a real-life {{type}} interview.
  
  Respond in the following JSON format:
  
  interviewQuestions = [
    {
      question: "Your first question here",
      type: "Technical | Behavioral | Experience | Problem Solving | Leadership"
    },
    {
      question: "Next question...",
      type: "..."
    }
  ]
  
  The goal is to create a structured, relevant, and time-optimized interview plan for a {{jobTitle}} role.`;
  