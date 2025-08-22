import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const syllabusData = [
  {
    id: 1,
    title: 'Basics of C Programming',
    description: 'Fundamental concepts of C and its applications',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
    
    chapters: [
      "History & features of C",
      "Structure of a C program",
      "Keywords, identifiers",
      "Variables and constants",
       "Data types and type modifiers",
        "Input/Output functions: printf(), scanf()",
         "Comments in C",
        "Compilation & execution process"
    ],
    notes:"notes.pdf"
  },
  {
    id: 2,
    title: ' Operators & Expressions',
    description: 'Understanding the operators and expressions in C',
    details: '',
    
    chapters: [
      "Arithmetic operators",
      "Relational operators",
      "Logical operators",
      "Bitwise operators",
      "Assignment operators",
      "Increment/Decrement operators",
      "Conditional (Ternary) operator",
      "Operator precedence and associativity",
      "Type conversion (implicit & explicit)"
    ],
    notes:"notes.pdf"
  },
  {
    id: 3,
    title: 'Control Statements',
    description: 'Exploring Control Statements in C',
    details: '',
    
    chapters: [
     "Conditional statements:if, if-else, nested if, else-if ladder",
     "switch-case",
     "Looping statements:for, while, do-while",
     "Jumping statements:break, continue, goto, return"
    ],
    notes:"notes.pdf"
  },
  {
    id: 4,
    title: 'Functions in C',
    description: 'Functions and their applications in C',
    details: '',
    chapters: [
     "Function declaration, definition, and call",
     "Types of functions (with/without arguments & return values)",
     "Recursion",
     "Scope and lifetime of variables",
     "Storage classes: auto, static, extern, register"
    ],
    notes:"notes.pdf"
  },
  {
    id: 5,
    title: 'Arrays and Strings',
    description: 'Understanding Arrays and Strings in C',
    details: '',
    
    chapters: [
    "One-dimensional arrays",
    "Two-dimensional arrays (matrices)",
    "Multi-dimensional arrays",
    "String handling:",
      "Declaring & initializing strings :String I/O: gets(), puts(), scanf(), printf()String functions: strlen(), strcpy(), strcmp(), strcat(), etc."
    ],
    notes:"notes.pdf"
  },
  {
    id: 6,
    title: 'Pointers and Dynamic Memory Allocation',
    description: 'Pointers and Memory Management in C',
    details: '',
  
    chapters: [
      "Basics of pointers",
     "Pointer arithmetic",
      "Pointers and arrays",
       "Pointers and functions",
        "Pointers to pointers",
        "Dynamic memory allocation: malloc(), calloc(), realloc(), free()"
    ],
    notes:"notes.pdf"
  },
  {
    id: 7,
    title: 'Structures ,Unions and File Handling',
    description: 'Structures, Unions, and File Handling in C',
    details: '',
    
    chapters: [
      "Structures:Declaration, initialization, accessing members",
       "Arrays of structures",
        "Nested structures",
         "Structure with pointers",
         "Unions",
        "Enumerated types (enum)",
      "File handling:File I/O functions: fopen(), fclose(), fgetc(), fputc(), fprintf(), fscanf(), etc.File modes (r, w, a, etc.)"
    ],
    notes:"notes.pdf"
  },
  {
    id: 8,
    title: 'Sources',
    description: 'Additional resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters: [
        "C Programming Documentation",
        "Online Tutorials (GeeksforGeeks, W3Schools, etc.)",
        "Books (The C Programming Language by Kernighan and Ritchie)",
        "Community Forums (Stack Overflow, Reddit)"
    ],
    url:[
        "https://www.learn-c.org/",
        "https://www.tutorialspoint.com/c_standard_library/index.htm",
        "https://www.geeksforgeeks.org/c-programming-language/"
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
            <li><Link to="/Clang">Syllabus</Link></li>
            <li><Link to="/Cassign">Assignments</Link></li>
          
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
                        {item.url.map((url, idx) => (
                          <li key={idx}>
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "#4f46e5", textDecoration: "none", display: "block" }}
                            >
                              {url}
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