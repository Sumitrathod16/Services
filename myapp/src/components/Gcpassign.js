import React, { useState } from "react";
const questionsData = [
  {
    question: "What is Google Cloud Platform?",
    options: ["A mobile operating system", "A search engine", "A suit of cloud computing services", "A web browser"],
    answer: 2,
  },
  {
    question: "Which GCP service provides virtual machines?",
    options: ["Cloud Functions", "Compute engine", "App Engine", "Cloud Run"],
    answer: 1,
  },
  {
    question: "Which service is GCP's serverless platform for building and hosting applications?",
    options: ["Cloud Run", "App Engine", "Compute Engine", "Kubernetes Engine"],
    answer: 1,
  },
   {
    question: "What is the main function of Google cloud Storage?",
    options: ["Hosting Websites", "Managing APIs", "Storing and retrieving any amount of data", "Running virtual machines"],
    answer: 2,
  },
   {
    question: "Which GCP service provides managed Kubernetes?",
    options: ["Cloud Functions", "Cloud Build", "Kubernetes Engine(GKE)", "Cloud Shell"],
    answer: 2,
  },
   {
    question: "What does Google Bigquery do?",
    options: ["Provides relational database services", "Stores structured data", "Runs large-scale data analytics ans SQL queries", "Manages virtual networks"],
    answer: 2,
  },
   {
    question: "Which GCP service is used for identity and access management?",
    options: ["Cloud Identity", "Cloud IAM", "Cloud Security", "Cloud monitor"],
    answer: 1,
  },
   {
    question: "What is the purpose of Cloud Functions in GCP?",
    options: ["Run virtual machine", "Provide a fully managed serverless execution environment", "Create Kubernetes clusters", "Manage APIs"],
    answer: 1,
  },
   {
    question: "Which of the following serrvices is best suited for real-time messaging and event ingestion?",
    options: ["Cloud functions", "Cloud Pub/Sub", "Cloud Datastore", "Cloud Storage"],
    answer: 1,
  },
  {
    question: "What is the role of a GCP Project?",
    options: ["To store all user data", "To organize billing accounts only", "To group related GCP resources together", "To manage only IAM roles"],
    answer: 2,
  },
  
];

const Gcpassign = () => {
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

export default Gcpassign;
