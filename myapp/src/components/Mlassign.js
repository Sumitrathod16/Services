import React, { useState } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "What is overfitting in machine learning?",
    options: ["Model fits training data too well", "Model performs well on test data", "Data is too large", "Model underperforms on training data"],
    answer: 0,
  },
  {
    question: "Which algorithm is used for classification problems?",
    options: ["Linear Regression", "Logistic Regression", "K-Means", "PCA"],
    answer: 1,
  },
  {
    question: "What does PCA stand for?",
    options: ["Primary Component Analysis", "Principal Component Algorithm", "Principal Component Analysis", "Partial Cluster Algorithm"],
    answer: 2,
  },
   {
    question: "What does PCA stand for?",
    options: ["Primary Component Analysis", "Principal Component Algorithm", "Principal Component Analysis", "Partial Cluster Algorithm"],
    answer: 2,
  },
   {
    question: "What does PCA stand for?",
    options: ["Primary Component Analysis", "Principal Component Algorithm", "Principal Component Analysis", "Partial Cluster Algorithm"],
    answer: 2,
  },
   {
    question: "What does PCA stand for?",
    options: ["Primary Component Analysis", "Principal Component Algorithm", "Principal Component Analysis", "Partial Cluster Algorithm"],
    answer: 2,
  },
   {
    question: "What does PCA stand for?",
    options: ["Primary Component Analysis", "Principal Component Algorithm", "Principal Component Analysis", "Partial Cluster Algorithm"],
    answer: 2,
  },
   {
    question: "What does PCA stand for?",
    options: ["Primary Component Analysis", "Principal Component Algorithm", "Principal Component Analysis", "Partial Cluster Algorithm"],
    answer: 2,
  },
   {
    question: "What does PCA stand for?",
    options: ["Primary Component Analysis", "Principal Component Algorithm", "Principal Component Analysis", "Partial Cluster Algorithm"],
    answer: 2,
  },
];

const Mlassign = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionClick = (index) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNext = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;
    questionsData.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.answer) {
        score++;
      }
    });
    return score;
  };

  const current = questionsData[currentQuestion];

  return (
    <>
    

    <div className="assignment-container">
      <div className="assignment-header">
        <h3>Assignment 1:</h3>
        <h1>Related Topics Review</h1>
        <div className="progress-bar">
          <div
            className="progress-filled"
            style={{ width: `${((currentQuestion + 1) / questionsData.length) * 100}%` }}
          ></div>
        </div>
        <div className="timer">
          <span>⏱️ Remaining</span> | <span>20 min</span>
        </div>
      </div>

      <div className="question-section">
        <div className="question-box">
          <h4>Question {currentQuestion + 1} of {questionsData.length}</h4>
          <p className="question-text">{current.question}</p>
          <div className="options">
            {current.options.map((option, index) => (
              <label
                key={index}
                className={`option-label ${selectedAnswers[currentQuestion] === index ? "selected" : ""}`}
                onClick={() => handleOptionClick(index)}
              >
                <span>{String.fromCharCode(65 + index)}</span> {option}
              </label>
            ))}
          </div>
        </div>

        <div className="score-box">
          <p>Total {questionsData.length} Questions</p>
          <p>{Object.keys(selectedAnswers).length} Attempted</p>
          <hr />
          <p>Score</p>
          <input
            type="text"
            readOnly
            value={isSubmitted ? calculateScore() : ""}
          />
        </div>
      </div>

      <div className="button-group">
        <button onClick={handlePrevious} disabled={currentQuestion === 0} className="prev-btn">
          ← Previous Question
        </button>
        <button onClick={handleNext} disabled={currentQuestion === questionsData.length - 1} className="next-btn">
          Next Question →
        </button>
        <button onClick={handleSubmit} className="submit-btn">
          Submit Assignment
        </button>
      </div>
    </div>
    </>
  );
};

export default Mlassign;
