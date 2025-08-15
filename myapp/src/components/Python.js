import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const syllabusData = [
  {
    id: 1,
    title: 'Introduction to Python',
    description: '',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
    icon: '🧠',
    chapters: [
    "What is Python",
    "Features and application of Python",
    "Installation & Environment Setup",
    "Introduction to Python shells and IDEs"
],
notes:"notes.pdf"
  },
  {
    id: 2,
    title: 'Variable,Keywords ,Data Types,and Identifiers',
    description: 'Understanding the architecture and function of ANNs',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
    icon: '🔗',
    chapters: [
     "Variables",
      "Keywords",
      "Data types(int,float,str,bool,etc.)",
      "Identifiers",
      "Type casting"
],
notes:"notes.pdf"
  },
  {
    id: 3,
    title: 'Data Strucutres',
    description: '',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
    icon: '🧱',
    chapters: [
   "Strings",
      "Lists",
      "Tuples",
      "Sets",
      "Dictionaries"
],
notes:"notes.pdf"
  },
  {
    id: 4,
    title: 'Operators in Python',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
       "Arithmetic Operators",
       "Logical Operators",
       "Realtional Operators",
       "Bitwise Operators",
       "Assignment Operators",
       "Membership Operators",
       "Identity Operators"  
  ],
  notes:"notes.pdf"
  },
  {
    id: 5,
    title: 'Control Flow Statements',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
       "Conditional Statements(if, elif, else)",
       "Looping Statements(for,while)",
       "break,continue , and pass"
    ],
    notes:"notes.pdf"
  },
  {
    id: 6,
    title: 'Input and Output in python',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
       "input() function",
       "print() function and formatting"
    ],
    notes:"notes.pdf"
  },
  {
    id: 7,
    title: 'Functions',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
       "Defining and calling functions",
       "Types of functions(Built-in,user-defined)",
       "Arguments(Positional,Keyword,Default,Variable-length)",
       "Return Statements",
       "Recursion",
       "Anonymous functions(lambda)"
    ],
    notes:"notes.pdf"
  },
  {
    id: 8,
    title: 'Object oriented programming in python',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
       "Classes and Objects",
       "__init__ Constructor",
       "Instance vs Class Variable",
       "Inheritance",
       "Method Overriding",
       "Access Specifiers(Public,Private,Protected)",
       "self Keyword",
       "super() Function"
    ],
    notes:"notes.pdf"
  },
  {
    id: 9,
    title: 'Exception Handling',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
       "try,except,else,finally",
       "Raising Exceptions(raise)",
       "Custom Exceptions",
       "assert Statement"


    ],
    notes:"notes.pdf"
  },
   {
    id: 10,
    title: 'Python Comprehensions',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
      "List Comprehension",
      "Dictionary Comprehension",
      "Set Comprehension"
    ],
    notes:"notes.pdf"
  },
   {
    id: 11,
    title: 'Decorators',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
       "Decorators"
],
notes:"notes.pdf"
  }, 
  {
   id: 12,
    title: 'Functional Programming tools',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
       "map()",
      "filter()",
      "lambda Expressions",
      "reduce()"
],
notes: "notes.pdf"
  }, 
  {
    id: 13,
    title:"Sources",
    description: 'Additional resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters:[
      "Python Official Documentation: https://docs.python.org/3/",
      "W3Schools Python Tutorial: https://www.w3schools.com/python/",
      "Real Python: https://realpython.com/",
      "GeeksforGeeks Python Programming Language: https://www.geeksforgeeks.org/python-programming-language/"
    ],
    url:[
      "https://docs.python.org/3/",
      "https://www.w3schools.com/python/",
      "https://realpython.com/",
      "https://www.geeksforgeeks.org/python-programming-language/"
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
        `}
      </style>
      <div className="main-container">
        <aside className="sidebar">
          <h2>Syllabus</h2>
          <ul>
            <li><Link to="/Python">Syllabus</Link></li>
            <li><Link to="/Pyassign">Assignment</Link></li>
          
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
                  <div style={{marginTop: "10px"}}>
                    <strong>Useful Links:</strong>
                    <ul>
                {item.url.map((link, idx) => (
                    <li key={idx}>
                      <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: "#4f46e5", textDecoration: "underline" }}>
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