import React from 'react';
import { questions } from '../data/questions';
import Question from './Question';
import Options from './Options';
import Result from './Result';
import { useQuiz } from '../context/QuizContext';

const Quiz = () => {
  const { currentQuestion, showResult, setShowResult } = useQuiz();

  if (showResult || currentQuestion >= questions.length) {
    setShowResult(true);
    return <Result totalQuestions={questions.length} />;
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <Question
        question={currentQ.question}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
      />
      <Options
        options={currentQ.options}
        correctAnswer={currentQ.correctAnswer}
        questionId={currentQ.id}
      />
    </div>
  );
};

export default Quiz;