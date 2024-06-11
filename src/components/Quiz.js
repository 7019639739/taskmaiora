// Quiz.js
import React, { useState, useEffect } from 'react';
import Question from './Question';
import Feedback from './Feedback';
import Score from './Score';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    // Simulating fetching data from backend API
    const sampleQuestions = [
      {
        "id": 1,
        "text": "What is the capital of France?",
        "options": ["London", "Paris", "Berlin", "Rome"],
        "correctAnswer": "Paris"
      },
      {
        "id": 2,
        "text": "Which planet is known as the Red Planet?",
        "options": ["Mars", "Venus", "Jupiter", "Mercury"],
        "correctAnswer": "Mars"
      },
      {
        "id": 3,
        "text": "Who wrote 'To Kill a Mockingbird'?",
        "options": ["Harper Lee", "Jane Austen", "F. Scott Fitzgerald", "Ernest Hemingway"],
        "correctAnswer": "Harper Lee"
      }
    ];
    setQuestions(sampleQuestions);
  }, []);

  const handleOptionSelect = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = { questionId: questions[currentQuestionIndex].id, selectedOption };
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    // Simulate submitting answers to backend API
    const feedbackData = { correct: userAnswers[currentQuestionIndex].selectedOption === questions[currentQuestionIndex].correctAnswer, correctAnswer: questions[currentQuestionIndex].correctAnswer };
    setFeedback(feedbackData);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    setFeedback(null);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    setFeedback(null);
  };

  return (
    <div className='flex' style={{display:'flex'}}>
      <div className="Quiz col-4" style={{ width: '33.33%' }}>
        {score !== null ? (
          <Score score={score} totalQuestions={questions.length} />
        ) : (
          <>
            <Question
              question={questions[currentQuestionIndex]}
              onOptionSelect={handleOptionSelect}
              onSubmit={handleSubmit}
              feedback={feedback}
            />
            <div>
              <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>Previous</button>
              <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
            </div>
          </>
        )}
      </div>
      <br/><br/><br/><br/>
      <div className='col-4' style={{ width: '33.33%' }}>
        <h2>Question List</h2>
        {userAnswers.map((answer, index) => (
          <h4 key={index}>QuestionId {answer?.questionId} is selected option : {answer?.selectedOption}....</h4>
        ))}
        <br/><br/><br/><br/>
        
      </div>
<br/><br/><br/><br/>
      <div className='col-4'>
        <h2>Your submitted answer</h2>
        {userAnswers.map((answer, index) => (
          <h4 key={index}>QuestionId {answer?.questionId} is selected option : {answer?.selectedOption}...</h4>
        ))}
        <br /><br />
        <h2>Correct Answer</h2>
        {userAnswers.map((answer, index) => (
          <p key={index}>{answer?.questionId && `The correct answer is ${questions[index]?.correctAnswer} `}</p>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
