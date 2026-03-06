"use client";

import * as m from "motion/react-m";

interface QuestionPageProps {
  question: {
    question: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
}

export default function QuestionPage({
  question,
  onAnswer,
}: QuestionPageProps) {
  return (
    <div className="w-full max-w-2xl px-4">
      <m.h2
        className="mb-8 text-center text-2xl font-bold"
        initial={{
          x: 200,
        }}
        animate={{
          x: 0,
        }}
      >
        {question.question}
      </m.h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <m.button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full rounded-lg bg-white p-4 text-left shadow hover:shadow-2xl"
            initial={{
              y: 200,
            }}
            animate={{
              y: 0,
            }}
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1 * index,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            {option}
          </m.button>
        ))}
      </div>
    </div>
  );
}
