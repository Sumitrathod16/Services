import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const syllabusData = [
  {
    id: 1,
    title: 'Php Basics',
    description: 'Fundamental concepts of PHP and its applications',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
  
    chapters: [
      "Introduction to PHP", 
      "Installing XAMPP / WAMP / LAMP",
       "PHP syntax and tags",
       "PHP file structure and execution",
        "Variables and data types",
        "Constants",
        "Comments",
         "Output: echo, print",
          "Basic operators: arithmetic, assignment, comparison, logical"
    ],
    notes:"notes.pdf"
  },
  {
    id: 2,
    title: 'Control Structures',
    description: 'Understanding control structures in PHP',
    details: '',

    chapters: [
    "Conditional statements: if, if-else, if-elseif-else, switch",
    "Looping: for, while, do-while, foreach",
    "Break and continue",
    "Match expression (PHP 8+)"  
    ],
    notes:"notes.pdf"
  },
  {
    id: 3,
    title: 'Functions and Arrays',
    description: 'Functions and Arrays in PHP',
    details: '',

    chapters: [
     "Declaring and calling functions",
     "Function parameters and return values",
     "Variable scope: local, global, static",
     "Built-in functions",
     "User-defined functions",
     "Arrays: Indexed, associative, and multidimensional arrays",
     "Array functions: array_push(), array_merge(), count(), etc.",
     "Looping through arrays"
    ],
    notes:"notes.pdf"
  },
  {
    id: 4,
    title: 'Forms and User Input',
    description: 'Handling forms and user input in PHP',
    details: '',
  
    chapters: [
     "HTML forms with PHP",
     "$_GET and $_POST",
     "$_REQUEST, $_SERVER, $_FILES",
     "Form validation and sanitization",
     "File upload handling",
     "Security basics: input filtering, escaping HTML, preventing XSS/SQL injection" 
    ],
    notes:"notes.pdf"
  },
  {
    id: 5,
    title: 'Strings, Date/Time and File handling',
    description: 'Working with strings, date/time, and file handling in PHP',
    details: '',
  
    chapters: [
     "String functions: strlen(), strtoupper(), str_replace(), etc.",
     "String concatenation",
     "Date and time functions: date(), time(), strtotime()",
     "Timezones and formatting",
     "File operations:fopen(), fread(), fwrite(), fclose()",
     "File upload basics",
     "File existence and deletion"
    ],
    notes:"notes.pdf"
  },
  {
    id: 6,
    title: 'Php with MySQL',
    description: 'Connecting PHP with MySQL databases',
    details: '',
  
    chapters: [
"Introduction to MySQL and phpMyAdmin",
"Connecting to MySQL using mysqli or PDO",
"Performing queries: SELECT, INSERT, UPDATE, DELETE",
"Displaying data from database",
"Prepared statements (for security)",
"Error handling",
"Database CRUD operations",
"Using JOINs in PHP queries"
    ],
    notes:"notes.pdf"
  },
  {
    id: 7,
    title: 'Advanced PHP Concepts',
    description: 'Advanced concepts in PHP',
    details: '',
    
    chapters: [
"Sessions and Cookies:",
"session_start(), $_SESSION, setcookie(), $_COOKIE",
"PHP OOP (Object-Oriented Programming):",
"Classes and objects",
"Constructors and destructors",
"Inheritance and visibility",
"Interfaces and traits",
"PHP and JSON",
"PHP and APIs (RESTful)",
"Sending emails using mail(), PHPMailer",
"Introduction to Composer (PHP package manager)",
"Introduction to MVC frameworks (e.g., Laravel basics)"
    ],
    notes:"notes.pdf"
  },
  {
    id: 8,
    title: 'Sources',
    description: 'Additional resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters: [
        "PHP Documentation",
        "Online Tutorials (W3Schools, PHP.net, etc.)",
        "Books (PHP: The Right Way)",
        "Community Forums (Stack Overflow, Reddit)"
    ],
    url:[
        "https://www.php.net/docs.php",
        "https://www.w3schools.com/php/",
        "https://www.tutorialspoint.com/php/index.htm",
        "https://www.geeksforgeeks.org/php-tutorials/",
        "https://www.freecodecamp.org/news/learn-php-with-these-free-resources/",
        "https://www.phptherightway.com/",
        "https://www.php.net/manual/en/index.php"
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
            <li><Link to="/Php">Syllabus</Link></li>
            <li><Link to="/Phpassign">Assignment</Link></li>
          
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