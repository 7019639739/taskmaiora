// Feedback.js
import React from 'react';

function Feedback({ feedback }) {
  return (
    <div className="Feedback">
      <p>{feedback.correct ? 'Correct!' : `Incorrect. The correct answer is ${feedback.correctAnswer}`}</p>
    </div>
  );
}

export default Feedback;
