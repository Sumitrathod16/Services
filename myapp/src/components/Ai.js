import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const syllabusData = [
  {
    id: 1,
    title: 'Introduction to Artificial Intelligence',
    description: 'Fundamental concepts of Ai',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
    
    chapters: [
      "Definition and history of AI",
      "Applications of AI in real-world domains (healthcare, robotics, finance, etc.)",
       "Types of AI: Narrow AI, General AI, Super AI",
       "Strong vs. Weak AI",
      "Turing Test and Rational Agents"
    ],
    notes:"notes.pdf"
  },
  {
    id: 2,
    title: 'Problem solving and Search algorithm',
    description: 'Understanding the problem solving methods and algorithms',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
    
    chapters: [
"State-space search and problem formulation",
"Uninformed search (BFS, DFS, UCS, DLS, IDS)",
"Informed search (Greedy Best-First Search, A*)",
"Heuristics and optimization",
"Constraint Satisfaction Problems (CSP)"
    ],
    notes:"notes.pdf"
  },
  {
    id: 3,
    title: 'Knowledge representation and reasoning',
    description: 'Representation of knowledge',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
  
    chapters: [
            "Propositional logic and predicate logic",
"Inference rules and resolution",
"Semantic networks and ontologies",
"Frames, scripts, and rule-based systems",
"Reasoning under uncertainty (Bayesian networks)"
    ],
    notes: 'notes.pdf',
  },
  {
    id: 4,
    title: 'Machine learning fundamentals',
    description: 'Machine learning implementation into the AI',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
      "Supervised learning: Regression, Classification",
"Unsupervised learning: Clustering, Dimensionality Reduction",
"Reinforcement learning: Markov Decision Processes (MDPs), Q-learning",
"Neural Networks and Deep Learning (basics)",
"Evaluation metrics: Accuracy, Precision, Recall, F1 Score"
    ],
    notes:"notes.pdf"
  },
    {
    id: 5,
    title: 'Natural Language processing',
    description: 'Implementing NLP to recognise language',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
"Text preprocessing: tokenization, stemming, stopwords",
"Syntax and semantics",
"Language models (n-grams, Transformers)",
"Sentiment analysis, machine translation, chatbots",
"Speech recognition basics"
    ],
    notes:"notes.pdf"
  },
    {
    id: 6,
    title: 'Computer vision and robotics',
    description: 'Robotics',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
"Image processing basics",
"Object detection and recognition",
"Convolutional Neural Networks (CNNs)",
"Applications in robotics: path planning, sensors, actuators",
"SLAM (Simultaneous Localization and Mapping)"
],
    notes:"notes.pdf"
  },
    {
    id: 7,
    title: 'Ethics and Future of AI',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
   "Bias and fairness in AI",
"AI and job displacement",
"AI safety and control",
"Explainable AI (XAI)",
"Current trends (AGI, AI in society, Responsible AI)"
    ],
    notes: 'notes.pdf',
  },
  {
    id: 8,
    title:"Sources",
    description: "Useful resources for further learning",
    chapters:[
      "Online courses (Coursera, edX, Udacity)",
      "Youtube channels (3Blue1Brown, Sentdex, Two Minute Papers)",
      "Books (Artificial Intelligence: A Modern Approach by Russell and Norvig, Deep Learning by Goodfellow et al.)",
    ],
    url:[
      "https://www.coursera.org/specializations/ai",
      "https://www.edx.org/professional-certificate/harvardx-data-science",
      "https://www.udacity.com/course/intro-to-artificial-intelligence--cs50ai"
    ]
  }
];

const Syllabus = () => {
  const [openId, setOpenId] = useState(null);
const toggleInfo = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: #f3f4f6;
        }
        .main-container {
          display: flex;
          height: 100vh;
        }
        .sidebar {
          width: 220px;
          background-color: #1f1f1fff;
          color: white;
          padding: 1rem;
        }
        .sidebar h2 {
          margin-bottom: 1rem;
        }
        .sidebar ul {
          list-style: none;
          padding: 0;
        }
        .sidebar li {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          margin-bottom: 0.5rem;
        }
        .sidebar ul li a {
          text-decoration: none;
          color: white;
        }
        .sidebar li.active, .sidebar li:hover {
          background-color: #2c2f3e;
        }
        .content {
          flex: 1;
          background-color: white;
          padding: 2rem;
          overflow-y: auto;
        }
        .syllabus-card {
          display: flex;
          padding: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          margin-bottom: 1rem;
          background-color: #f9fafb;
          transition: background 0.2s;
        }
        .syllabus-card:hover {
          background-color: #f3f4f6;
        }
        .icon {
          font-size: 1.8rem;
          margin-right: 1rem;
          align-self: flex-start;
        }
        .info h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }
        .info p {
          margin: 0.4rem 0 0.6rem 0;
          font-size: 0.9rem;
          color: #4b5563;
        }
        .progress-bar {
          height: 6px;
          background-color: #d1d5db;
          border-radius: 3px;
          overflow: hidden;
          width: 100%;
          margin-top: 0.5rem;
        }
        .bar-fill {
          height: 100%;
          width: 60%;
          background-color: #4f46e5;
        }
        .clickable {
          cursor: pointer;
        }
        .extra-info {
          margin-top: 0.5rem;
          font-size: 0.85rem;
          color: #374151;
          background-color: #e5e7eb;
          padding: 0.8rem;
          border-radius: 8px;
        }
        .chapter-list {
          margin-top: 0.5rem;
          padding-left: 1.2rem;
        }
        .chapter-list li {
          margin-bottom: 0.3rem;
          color: #22223b;
        }
      
      `}</style>

      <div className="main-container">
        <aside className="sidebar">
          <h2>Syllabus</h2>
          <ul>
            <li><Link to="/Ai">Syllabus</Link></li>
            <li><Link to="/Aiassign">Assignments</Link></li>
          
          </ul>
        </aside>

        <section className="content">
          {syllabusData.map((item) => (
            <div
              key={item.id}
              className="syllabus-card clickable"
              onClick={() => toggleInfo(item.id)}
            >
              <div className="icon">{item.icon}</div>
              <div className="info">
                <h3>{item.id}. {item.title}</h3>
                <p>{item.description}</p>
                {item.id === 1 && (
                  <div className="progress-bar">
                    <div className="bar-fill" />
                  </div>
                )}
                {openId === item.id && (
                  <div className="extra-info">
                    <p>{item.details}</p>
                    <ul className="chapter-list">
                      {item.chapters.map((chapter, idx) => (
                        <li key={idx}>{chapter}</li>
                      ))}
                    </ul>
                    {item.notes && (
                      <div style={{ marginTop: "10px" }}>
                        <a
                          href={item.notes}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#4f46e5", textDecoration: "underline" }}
                        >
                          Download Notes
                        </a>
                      </div>
                    )}
                    {item.url && Array.isArray(item.url) && (
                      <div style={{ marginLeft:"20px",marginTop: "10px" }}>
                        <strong>Useful Links:</strong>
                        <ul>
                          {item.url.map((link, idx) => (
                            <li key={idx}>
                              <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#4f46e5", textDecoration: "none" }}
                              >
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Syllabus;  