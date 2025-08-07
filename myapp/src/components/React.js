import React, { useState } from 'react';

const syllabusData = [
  {
    id: 1,
    title: 'React Fundamentals',
    description: 'Fundamental concepts of  learning and its applications',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
    icon: '🧠',
    chapters: [
    "What is React and why use it?",
    "SPA (Single Page Applications) vs MPA",
    "JSX (JavaScript XML) and how it compiles",
    "Functional Components vs Class Components",
    "Rendering elements",
    "Props and Prop Drilling",
    "State and setState",
    "Conditional Rendering",
    "Handling Events",
    "Lists and Keys"  
    ]
  },
  {
    id: 2,
    title: ' React State & Lifecycle',
    description:'Master data management and component behavior over time',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
    icon: '🔗',
    chapters: [
      "useState Hook",
     "useEffect Hook",
     "Component Lifecycle Methods (Class-based: componentDidMount, etc.)",
     "Controlled vs Uncontrolled Components",
     "Forms in React",
     "Handling form input and validation",
     "Lifting State Up",
     "useRef and DOM manipulation",
     "useReducer for complex state",
     "Memoization with React.memo and useCallback",
     "useContext for global state sharing"
    ]
  },
  {
    id: 3,
    title: ' Component Architecture & Routing',
    description: 'Build modular, navigable applications',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
    icon: '🧱',
    chapters: [
   "Component-based architecture and best practices",
    "Smart vs Dumb Components",
    "Container vs Presentational Components",
    "Routing with React Router:",
    "Setting up React Router",
    "Route, Link, Navigate, useNavigate",
    "Route Params and Query Params",
    "Nested Routes ",
    "Protected Routes and Redirects",
    "Layout Components (Header, Footer, etc.)",
    "Lazy Loading and Code Splitting (React.lazy, Suspense)"  
    ]
  },
  {
    id: 4,
    title: 'State Management & APIs',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
    "State Management Strategies in React",
    "Fetching APIs with:",
    "Fetch API",
    "Axios",
    "async/await in React",
    "Custom Hooks (useFetch, etc.)",
    "Error Handling in API requests",
    "Loading states and placeholders (e.g., spinners)",
    "Global State with:",
    "React Context API",
    "Redux Toolkit",
    "Zustand or Recoil (modern alternatives)",
    "Persisting state with localStorage/sessionStorage"  
    ]
  },
  {
    id:5,
    title:'Advanced React & Best Practices',
    description:'Prepare for production-level apps and interviews',
    details:'',
    icon:'',
    chapters:[
       "Performance Optimization:",
       "useMemo",
       "useCallback",
       "React.memo",
       "Debouncing & Throttling",
       "React Portals",
       "Error Boundaries",
       "Testing in React:",
       "Unit Testing with Jest",
       "Component Testing with React Testing Library",
       "Accessibility (ARIA, semantic HTML)",
       "SEO with React (CSR vs SSR)",
       "Server-Side Rendering (SSR) Basics (Next.js)",
       "Environment Variables in React",
       "Folder Structure Best Practices",
       "Deployment (Vercel, Netlify, Firebase, etc.)",
     
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
          background-color: #1c1f2e;
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
            <li className="active">Syllabus</li>
            <li>Modules</li>
            <li>Assignments</li>
            <li>Grades</li>
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