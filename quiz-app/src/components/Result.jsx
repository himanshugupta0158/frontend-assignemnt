import React from 'react';
import { useQuiz } from '../context/QuizContext';

const Result = ({ totalQuestions }) => {
  const { score, resetQuiz, answers } = useQuiz();

  const percentage = ((score / totalQuestions) * 100).toFixed(1);
  const correctAnswers = answers.filter(answer => answer.isCorrect).length;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Quiz Summary</h2>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-lg text-gray-600">Score</p>
            <p className="text-2xl font-semibold text-blue-600">
              {score} / {totalQuestions}
            </p>
          </div>
          <div>
            <p className="text-lg text-gray-600">Percentage</p>
            <p className="text-2xl font-semibold text-blue-600">{percentage}%</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Answer Breakdown</h3>
        <div className="space-y-4">
          {answers.map((answer, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${answer.isCorrect ? 'bg-green-50' : 'bg-red-50'
                }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">
                    Question {index + 1}: {answer.isCorrect ? '✅ Correct' : '❌ Incorrect'}
                  </p>
                  <p className="text-sm text-gray-600">
                    Your answer: {answer.selectedOption || 'Not answered'}
                  </p>
                </div>
                <span className={`text-sm font-medium ${answer.isCorrect ? 'text-green-600' : 'text-red-600'
                  }`}>
                  {answer.isCorrect ? '+1' : '0'} point
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-6">
        <p className="text-gray-700">
          {percentage >= 80
            ? "Excellent job! You really know your stuff!"
            : percentage >= 60
              ? "Good effort! You're on the right track."
              : "Keep practicing! You'll get there!"}
        </p>
      </div>

      <div className="text-center">
        <button
          onClick={resetQuiz}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Result;