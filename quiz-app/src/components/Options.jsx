import React from 'react';
import { useQuiz } from '../context/QuizContext';

const Options = ({ options, correctAnswer, questionId }) => {
  const { setScore, setCurrentQuestion, answers, setAnswers } = useQuiz();

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setAnswers(prev => [...prev, { questionId, selectedOption, isCorrect }]);
    setCurrentQuestion(prev => prev + 1);
  };

  return (
    <div className="space-y-3">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(option)}
          className="w-full text-left p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;