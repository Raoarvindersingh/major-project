// app/api/ai-model/route.js
import { NextResponse } from "next/server";
import OpenAI from "openai";

const QUESTION_PROMPT = `
Generate an interview for the following role:
Title: {{jobTitle}}
Description: {{jobDescription}}
Duration: {{duration}} minutes
Type: {{type}}

Please return a JSON array with each question and its type.
Example: 
{
  "interviewQuestions": [
    { "question": "What are your strengths?", "type": "Behavioral" },
    ...
  ]
}
`;

export async function POST(req) {
  try {
    const { jobPosition, jobDescription, duration, type } = await req.json();

    const FINAL_PROMPT = QUESTION_PROMPT
      .replace('{{jobTitle}}', jobPosition)
      .replace('{{jobDescription}}', jobDescription)
      .replace('{{duration}}', duration)
      .replace('{{type}}', type);

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.5-pro-exp-03-25:free",
      messages: [{ role: "user", content: FINAL_PROMPT }],
    });

    const messageContent = completion.choices[0].message.content;

    return NextResponse.json({ content: messageContent });
  } catch (e) {
    console.error("API error:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
