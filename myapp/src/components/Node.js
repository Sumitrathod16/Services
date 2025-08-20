import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const syllabusData = [
  {
    id: 1,
    title: 'Introduction to Nodejs',
    description:'Understand the core of how Node.js works',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',

    chapters: [
    "What is Node.js and why use it?",
    "Node.js Architecture (Event Loop, Call Stack, Libuv)",
    "V8 JavaScript Engine",
    "Synchronous vs Asynchronous programming",
    "Node.js Global Objects (__dirname, __filename, process, global)",
    "CommonJS Modules vs ES Modules",
    "REPL (Read-Eval-Print Loop)",
    "NPM (Node Package Manager) and package.json",
    "Installing and updating Node.js and NPM " 
    ],
    notes:"notes.pdf"
  },
  {
    id: 2,
    title: ' Core Modules & File System',
    description: 'Learn to work with built-in modules and file operations',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
    
    chapters: [
    "fs (File System)",
    "path",
    "os",
    "url",
    "events",
    "util",
    "stream",
    "buffer",
    "Creating and reading files (sync/async)",
    "Working with directories",
    "EventEmitter and custom events",
    "Streams and piping",
    "Understanding Buffers and handling binary data"
    ],
    notes:"notes.pdf"
  },
  {
    id: 3,
    title: ' Networking and HTTP',
    description: 'Build servers and handle requests/responses',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
  
    chapters: [
    "Creating a basic HTTP server",
    "Request and response handling",
    "Routing manually without a framework",
    "Handling form data (GET & POST)",
    "Working with query strings and URL parsing",
    "Setting response headers and status codes",
    "Introduction to HTTPS and TLS",
    "Introduction to WebSockets"  
    ],
    notes:"notes.pdf"
  },
  {
    id: 4,
    title: 'Express.js & Middleware',
    description: 'Use the most popular framework for building apps with Node.js',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
      "What is Express.js?",
     "Creating routes (GET, POST, PUT, DELETE)",
     "Route parameters and query strings",
     "Express middleware (built-in, third-party, custom)",
     "Static file serving",
     "Error handling middleware",
     "Express Router (modular routing)",
     "Working with forms and JSON",
     "Using Postman for testing APIs",
     "Handling CORS in Express",
    "RESTful API structure using Express"
    ],
    notes:"notes.pdf"
  },{
  id: 5,
    title: ' Advanced Concepts & Tooling',
    description: 'Deepen your knowledge and explore production-ready practices',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
      "MongoDB using Mongoose",
      "MySQL or PostgreSQL",
      "Environment Variables with dotenv",
      "Authentication & Authorization (JWT, OAuth)",
      "File Uploads with multer",
      "Async/Await and Promises in-depth",
      "Error Handling & Logging (Winston, Morgan)", 
      "Using Nodemon and debugging techniques",
      "Writing Unit Tests (Mocha, Chai, Jest)",
      "Building and consuming REST APIs",
      "Introduction to GraphQL with Node.js",
      "Deploying Node.js Apps (Heroku, Vercel, DigitalOcean, etc.)",
      "Performance optimization (Clustering, Load balancing)"
    
    ],
    notes:"notes.pdf"
  },
  {
    id: 6,
    title: 'Sources',
    description: 'Resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters: [
      "Node.js Documentation",
      "Express.js Documentation",
      "Online Courses (Coursera, Udemy, etc.)",
      "YouTube Channels (Traversy Media, Academind, etc.)",
      "GitHub Repositories and Open Source Projects"
    ],
    url: [
      "https://nodejs.org/en/docs/",
      "https://expressjs.com/",
      "https://www.udemy.com/topic/nodejs/",
      "https://www.youtube.com/c/TraversyMedia",
      "https://www.youtube.com/c/Academind",
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
            <li><Link to="/Node">Syllabus</Link></li>
            <li><Link to="/Nodeassign">Assignment</Link></li>
        
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
                {item.url && Array.isArray(item.url)&& (
                  <div style={{marginLeft:"20px",marginTop:"10px"}}>
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