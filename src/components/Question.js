// Question.js
import React from 'react';

function Question({ question, onOptionSelect, onSubmit, feedback }) {
  const handleOptionChange = (e) => {
    onOptionSelect(e.target.value);
  };

  if (!question) {
    return <p>Loading...</p>; // Add a loading state
  }

  return (
    <div className="Question">
      <h2>{question.text}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              id={`option${index}`}
              name="option"
              value={option}
              onChange={handleOptionChange}
              disabled={feedback !== null}
            />
            <label htmlFor={`option${index}`}>{option}</label>
          </li>
        ))}
      </ul>
      <button onClick={onSubmit} disabled={feedback !== null}>Submit</button>
      {feedback && (
        <p>{feedback.correct ? 'Correct!' : `Incorrect. The correct answer is ${question.correctAnswer}`}</p>
      )}
    </div>
  );
}

export default Question;
