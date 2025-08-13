import React, { useState } from "react";
const questionsData = [
  {
    question: "print(type([1,2,3]))",
    options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"],
    answer: 0,
  },
  {
    question: "Which of the following is not a valid python data type?",
    options: ["list", "tuple", "array", "dictionary"],
    answer: 2,
  },
  {
    question: "What will be the result of 3*'7' in python?",
    options: ["21", "777", "Error", "'21'"],
    answer: 1,
  },
   {
    question: "Which keyword is used to define a function in Python?",
    options: ["func", "def", "function", "lambda"],
    answer: 1,
  },
   {
    question: "What is the output of the following code?x=[1,2,3] print(x[-1])",
    options: ["1","2", "3", "Error"],
    answer: 2,
  },
   {
    question: "Which of the following is used to handlle exceptions in Python?",
    options: ["try-except", "catch", "do-catch", "try-catch"],
    answer: 0,
  },
   {
    question: "What is the output of bool([]) in python?",
    options: ["True", "False", "[]","Error"],
    answer: 1,
  },
   {
    question: "Which of the following is the correct syntax to import a module in Python?",
    options: ["import module_name()","inclue module_name","Using module_name","import module_name"],
    answer: 3,
  },
   {
    question: "What does the len() function do in Python?",
    options: ["Return the size of an integer","Returns the number of arguments","Returns the length of an object","Measures memory size"],
    answer: 2,
  },
  {
    question: "What will be the output? x={1,2,3} x.add(2) print(x)",
    options: ["{1,2,3,2}", "{1,2,3}", "{2,3}", "Error"],
    answer: 1,
  },
  
];

const Pyassign = () => {
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
    <style>{`
     .assignment-container {
  font-family: 'Arial', sans-serif;
  max-width: 900px;
  margin: auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.assignment-header h3 {
  color: #555;
  margin-bottom: 0;
}

.assignment-header h1 {
  font-size: 26px;
  margin-top: 5px;
}

.progress-bar {
  background: #eee;
  border-radius: 10px;
  height: 8px;
  margin: 10px 0;
  overflow: hidden;
}

.progress-filled {
  background-color: #aaa;
  height: 100%;
  border-radius: 10px;
}

.timer {
  font-size: 14px;
  color: #444;
  margin-bottom: 20px;
}

.question-section {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
}

.question-box {
  flex: 3;
  background-color: #fafafa;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #eee;
}

.question-box h4 {
  font-weight: 600;
  margin-bottom: 15px;
}

.options {
  display: flex;
  justify-content: space-between;
}

.options label {
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
  cursor: pointer;
}

.options span {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 50%;
  border: 1px solid #999;
  text-align: center;
  font-size: 13px;
  line-height: 20px;
}

.score-box {
  flex: 1;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
  text-align: center;
}

.score-box p {
  margin: 8px 0;
}

.score-box input {
  width: 80%;
  padding: 5px;
  margin-top: 8px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.button-group button {
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
}

.prev-btn, .next-btn {
  background-color: #f2f2f2;
}

.submit-btn {
  background-color: #000;
  color: white;
}
  .question-text {
  font-size: 16px;
  margin-bottom: 16px;
}

.option-label {
  display: block;
  padding: 8px;
  margin: 8px 0;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid #ddd;
  transition: 0.2s;
}

.option-label:hover {
  background-color: #f0f0f0;
}

.option-label.selected {
  background-color: #d0eaff;
  border-color: #007bff;
}

    `}</style>

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
          <span>⏱️ Remaining</span> | <span>700 oim</span>
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

export default Pyassign;
