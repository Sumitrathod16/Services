import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const syllabusData = [
  {
    id: 1,
    title: 'Introduction to Machine Learning',
    description: '',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
    icon: '',
    chapters: [
    "Introduction to machine learning",
      "Performance of measures of classification",
      "Bias-Variance Tradeoff",
      "Regression"
    ],
    notes:"notes/introduction to ml.pdf"
  },
  {
    id: 2,
    title: 'Bayesian decision Theory',
    description: 'Bayesian Decision Theory',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
    icon: '',
    chapters: [
       "Bayesian Belief Networks"
      ],
      notes:"notes/bayesian-decision-theory.pdf"
  },
  {
    id: 3,
    title: 'Parametric Approaches and non-parametric approaches',
    description: '',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
    icon: '',
    chapters: [
    "Parameter Estimation and Maximum likelihood Estimation",
      "Parameter Estimation and Bayesian Estimation",
      "Concept of non-parametric techniques",
      'Density Estimation by Parzen window',
      "Parzon window and k-nearest neighbor algorithm",
    ],
    notes:"notes/Parametric approaches and non-parametric approaches.pdf"
  },
  {
    id: 4,
    title: 'Perceptron criteria and Discriminative models',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '',
    chapters: [
      "Linear discriminant Functions and perceptron Criteria",
      "Support Vector Machine"
     ],
     notes:"notes/Perceptron criteria and Discriminative.pdf"
  },
  {
    id: 5,
    title: 'Logistic regression ,Decision trees and hidden markov model',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '',
    chapters: [
      "Logisitc Regression ",
      "Decision tree",
      "Hidden Markov Model(HMM)"

    ],
    notes:"notes.pdf"
  },
  {
    id: 6,
    title: 'Ensemble Methods',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '',
    chapters: [
      "Ensemble Classifiers"
    ],
    notes:"notes.pdf"
  },
  {
    id: 7,
    title: 'Dimensionality Problems',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '',
    chapters: [
      "Dimensionality Problem and Principal Component analysis",
      "Principal Component analysis",
      "Linear Discriminant analysis"
],
notes:"notes.pdf"
  },
  {
    id: 8,
    title: 'Mixture model and clustering',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '',
    chapters: [
       "Gaussian Mixture Model and EM algorithm",
      "K-means clustering",
],
notes:"notes.pdf"
  },
  {
    id: 9,
    title: 'Clustering',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '',
    chapters: [
       "Fuzzy k-means clustering",
      "Hierarchical Agglomorative clustering and Mean-shift Clustering"

      ],
      notes:"notes.pdf"
  },
{
    id: 10,
    title: 'Sources',
    description: 'Additional resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters: [
      "Machine Learning Mastery",
      "Coursera Machine Learning Course",
      "Kaggle Datasets and Competitions",
      "Google AI Blog",
      "YouTube Channels (3Blue1Brown, StatQuest)"
    ],
    url :[
      "https://machinelearningmastery.com/",
      "https://www.coursera.org/learn/machine-learning",
      "https://www.kaggle.com/datasets",
      "https://ai.googleblog.com/",
      "https://www.youtube.com/c/3blue1brown",
      "https://www.youtube.com/c/StatQuest"
    ]
}
   
  
];

const Ml = () => {
  const [openId, setOpenId] = useState(null);
const toggleInfo = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <style>
        {`
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
          .sidebar ul li a{
          text-decoration:none;
          color:white;
          }
        
        .sidebar li.active, .sidebar li a:hover {
          background-color: #2c2f3e;
          border-radius:8px;
          
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
        `}
      </style>
      <div className="main-container">
        <aside className="sidebar">
          <h2>Syllabus</h2>
          <ul>
            <li><Link to="/Ml">Syllabus</Link></li>
           <li><Link to ="/Assignment">Assignments</Link></li>
      
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
                  <div style={{ marginTop: "10px" }}>
                    <strong>Useful Links:</strong>
                    <ul>
                      {item.url.map((link, idx) => (
                        <li key={idx}>
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#4f46e5", textDecoration: "underline" }}
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

export default Ml;