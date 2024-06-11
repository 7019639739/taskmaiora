// Score.js
import React from 'react';

function Score({ score, totalQuestions }) {
  return (
    <div className="Score">
      <h2>Quiz Completed</h2>
      <p>Your score: {score} out of {totalQuestions}</p>
    </div>
  );
}

export default Score;
