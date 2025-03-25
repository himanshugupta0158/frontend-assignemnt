import React from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';
import { QuizProvider } from './context/QuizContext';

const App = () => {
  return (
    <QuizProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto py-8">
          <Quiz />
        </main>
      </div>
    </QuizProvider>
  );
};

export default App;