import React from 'react';

const Question = ({ question, questionNumber, totalQuestions }) => {
  return (
    <div className="mb-6">
      <p className="text-sm text-gray-600 mb-2">
        Question {questionNumber} of {totalQuestions}
      </p>
      <h2 className="text-xl font-semibold text-gray-800">{question}</h2>
    </div>
  );
};

export default Question;