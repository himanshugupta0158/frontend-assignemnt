import { createContext, useState, useContext } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  return (
    <QuizContext.Provider value={{
      currentQuestion,
      setCurrentQuestion,
      score,
      setScore,
      showResult,
      setShowResult,
      answers,
      setAnswers,
      resetQuiz
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);