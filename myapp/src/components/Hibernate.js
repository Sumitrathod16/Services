import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const syllabusData = [
  {
    id: 1,
    title: 'Introuction to hibernate & ORM Concepts ',
    description: '',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
    icon: '🧠',
    chapters: [
"What is hibernate",
"ORM basics",
"JPA vs Hibernate",
"Hibernate architecture"
],
notes:"notes.pdf"
  },
  {
    id: 2,
    title: 'Hibernate Configuration & setup',
    description: 'Understanding the architecture and function of ANNs',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
    icon: '🔗',
    chapters: [
     "Hibernate dependencies",
     "Configuration Files",
     "Database Connectivity",
     "Annotation vs XML mapping"
],
notes:"notes.pdf"
  },
  {
    id: 3,
    title: 'Entity Mapping',
    description: '',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
    icon: '🧱',
    chapters: [
"Defining entities",
"Primary key strategies",
"Data types & attributee mapping",
"Embedded and transient fields"
],
notes:"notes.pdf"
  },
  {
    id: 4,
    title: 'Relationships Mapping',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
      "One-to-one",
      "One-to-Many",
      "Many-to-Many",
      "Cascade operations & Fetch types"
],
notes:"notes.pdf"
  },
  {
    id: 5,
    title: 'CRUD operations & session Management',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
       "Basic CRUD",
       "Session lifecycle",
       "Transaction Management",
       "Detaching and merging objects"
    ],
    notes:"notes.pdf"
  },
  {
    id: 6,
    title: 'HQL,JPQL & Criteria API',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
      "Hibernate Query Language(HQL)",
      "JPQL",
      "Named Queries",
      "Criteria API",
      "Native SQL Queries"
    ],
    notes:"notes.pdf"
  },
  {
    id: 7,
    title: 'Advanced Topics & Performance Optimization',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
"Caching",
"Lazy vs Eager Loading",
"Batch processing & fetching strategies",
"Transactions with JTA, Spring Itegration",
"Best Practices"
    ],
    notes:"notes.pdf"
  },
  {
    id: 8,
    title: 'Sources',
    description: 'Resources for further learning',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    chapters: [
      "Hibernate Documentation",
      "Books (Java Persistence with Hibernate, etc.)",
      "Online Courses (Udemy, Coursera)",
      "Community Forums (Stack Overflow, Hibernate Forums)",
      "YouTube Channels (Java Brains, Telusko)"
    ],
    url: [
      "https://hibernate.org/orm/documentation/",
      "https://www.amazon.com/Java-Persistence-Hibernate-Coverage-Annotations/dp/1617291043",
      "https://www.udemy.com/course/hibernate-tutorial-for-beginners/",
      "https://stackoverflow.com/questions/tagged/hibernate",
      "https://www.youtube.com/c/JavaBrainsChannel"
    ],
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
            <li><Link to="/Flask">Syllabus</Link></li>
            <li><Link to="/Hiberassign">Assignment</Link></li>
          
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