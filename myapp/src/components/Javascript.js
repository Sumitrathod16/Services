import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const syllabusData = [
  {
    id: 1,
    title: 'Introduction to Javascript',
    description: 'Fundamental concepts of deep learning and its applications',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
    icon: '🧠',
    chapters: [
    "What is JavaScript? (History, usage, role in web dev)",
     "Embedding JavaScript in HTML (<script> tag)",
     "Comments and whitespace",
     "Variables & Constants (var, let, const)",
     "Data Types:",
     "Primitive types: string, number, boolean, null, undefined, symbol, bigint",
     "Reference types: Objects, Arrays, Functions",
     "Operators:",
     "Arithmetic, Assignment, Comparison, Logical, Ternary",
     "Type Conversion (Implicit vs Explicit)",
     "String Manipulation",
     "Template Literals",
     "Console Methods (console.log, error, table, etc.)"  
    ],
    notes:"notes.pdf"
  },
  {
    id: 2,
    title: 'Control Structures & Functions',
    description: 'Understanding the architecture and function of ANNs',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
    icon: '🔗',
    chapters: [
      "Conditionals:",
          
           " if, else if, else",
            "switch statements",
            "Loops:",
            "for, while, do...while",
            "Loop control: break, continue",
            "Looping through arrays and objects (for...of, for...in)",
          "Functions:",
           "Function declarations and expressions",
           "Parameters and return values", 
           "Arrow functions (=>)",
           "Callback functions",
          "IIFE (Immediately Invoked Function Expressions)",
          "Recursion",
          "Scope:",
          "Global vs Local",
          "Block scope (with let and const)",
          "Function scope",
           "Hoisting",
          "Closures"
    ],
    notes:"notes.pdf"
  },
  {
    id: 3,
    title: 'Introduction to Javascript Libraries',
    description: 'Exploring multi-layered neural networks and their power',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
    icon: '🧱',
    chapters: [
      "Objects and Object Literals",
      "this in objects",
      "Constructor Functions",
      "Prototypes and Inheritance",
      "ES6 Classes",
      "Encapsulation, Inheritance, Polymorphism",
      "Private Fields and Methods"
    ],
    notes:"notes.pdf"
  },
  {
    id: 4,
    title: 'Recent trends in Javascript and its uses',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
      "DOM (Document Object Model)",
      "Selecting elements: getElementById, querySelecto",
      "Modifying content and styles",
      "Creating, removing, and cloning elements",
      "Event Handling",
     "addEventListener, event propagation (bubbling & capturing)",
     "Event delegation",
     "Browser APIs",
     "localStorage, sessionStorage",
     "fetch API (AJAX requests)",
     "Geolocation, Clipboard, Notifications, etc.",
    "Form validation",
     "Timers & intervals"
    ],
    notes:"notes.pdf"
  },
  {
     id: 5,
    title: ' ES6+ and Modern JavaScript',
    description: 'Latest advancements and future directions of the field',
    details: 'You will learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
     "Let & Const (Block Scoping)",
     "Arrow Functions",
     "Template Literals",
     "Destructuring Assignment",
     "Default, Rest, and Spread Parameters",
     "Modules: import and export",
     "Promises and Async/Await",
     "Map, Set, WeakMap, WeakSet",
     "Optional Chaining (?.), Nullish Coalescing (??)",
     "Generators and Iterators",
     "Symbol and BigInt"
    ],
    notes:"notes.pdf"
    },
  {
    id: 6,
    title: 'Sources',
    description: 'Resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters: [
      "MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "JavaScript.info: https://javascript.info/",
      "Eloquent JavaScript (book): https://eloquentjavascript.net/",
      "YouTube Channels (Traversy Media, Academind, The Net Ninja)",
      "Online Courses (Udemy, Coursera, freeCodeCamp)"
    ],
    url:[
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "https://javascript.info/",
      "https://eloquentjavascript.net/",
      "https://www.youtube.com/c/TraversyMedia",
      "https://www.youtube.com/c/Academind",
      "https://www.youtube.com/c/TheNetNinja",
      "https://www.udemy.com/topic/javascript/",
      "https://www.coursera.org/courses?query=javascript",
      "https://www.freecodecamp.org/"
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
            <li><Link to="/Javascript">Syllabus</Link></li>
            <li><Link to="/Jsassign">Assignments</Link></li>
            
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

export default Syllabus;