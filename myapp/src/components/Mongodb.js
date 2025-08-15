import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const syllabusData = [
  {
    id: 1,
    title: 'MongoDB Basics',
    description: 'Fundamental concepts of  learning and its applications',
    details: 'This section covers the foundations of  learning, including definitions, types, and how it’s used in modern applications.',
    icon: '🧠',
    chapters: [
    "What is MongoDB?",
    "NoSQL vs SQL databases",
    "Documents, Collections, and Databases",
    "BSON vs JSON",
    "Installing MongoDB locally",
    "Using MongoDB Atlas (Cloud MongoDB)",
    "MongoDB Compass (GUI Tool)",
    "Basic MongoDB Shell Commands:",
    "show dbs, use db, show collections,db.collection.insertOne(), insertMany()",
    "db.collection.find(), findOne()",
    "Understanding _id field"
    ],
    notes:"notes.pdf"
  },
  {
    id: 2,
    title: ' CRUD Operations',
    description: 'Understanding the architecture and function of ANNs',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
    icon: '🔗',
    chapters: [
    "Create:",
    "insertOne(), insertMany()",
    "Read:",
    "find(), findOne()",
    "Projections (include/exclude fields)",
    "Filtering using query operators ($eq, $gt, $lt, etc.)",
    "Sorting, Limiting, and Skipping results",
    "Update:",
    "updateOne(), updateMany()",
    "$set, $inc, $unset",
    "Upserts (update + insert)",
    "Delete:",
    "deleteOne(), deleteMany()"
        ],
        notes:"notes.pdf"
  },
  {
    id: 3,
    title: ' Advanced Querying & Indexing',
    description: 'Exploring multi-layered neural networks and their power',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
    icon: '🧱',
    chapters: [
    "Query Operators:",
    "$in, $nin, $and, $or, $not, $exists, $regex",
    "Array Queries:",
    "$elemMatch, $size, $all",
    "Embedded Documents and Nested Queries",
    "Aggregation Framework:",
    "$match, $group, $project, $sort, $limit, $lookup",
    "Indexing:",
    "Single Field, Compound, and Text Indexes",
    "Creating and using Indexes",
    "Index Performance (Explain Plan)",
    "Data Modeling Best Practices (embedded vs referenced"  
    ],
    notes:"notes.pdf"
  },
  {
    id: 4,
    title: ' MongoDB with Node.js (Mongoose)',
    description: 'Use MongoDB in real-world backend projects',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
    "Introduction to Mongoose ORM",
    "Defining Mongoose Schemas and Models",
    "CRUD operations using Mongoose",
     "Schema Types and Validations",
     "Mongoose Middleware (Pre/Post Hooks)",
     "Relationships in MongoDB (References & Population)",
     "Query Building with Mongoose",
     "Error handling and validation",
     "Connecting MongoDB to Express apps",
     "Environment Variables and Configs with MongoDB URI"
     ],
     notes:"notes.pdf"
  },
  {
    id: 5,
    title: '. Production, Security & Tools',
    description: 'Fundamental concepts of  learning and its applications',
    details: 'This section covers the foundations of  learning, including definitions, types, and how it’s used in modern applications.',
    icon: '🧠',
    chapters:[
     "MongoDB Atlas Cloud Setup",
     "Connection URI and Environment Configs",
     "Authentication & Role-Based Access Control",
     "Backup & Restore Databases",
     "Replica Sets and Sharding Basics (High Availability & Scaling)",
     "Database Security Best Practices:",
     "IP Whitelisting",
     "SSL/TLS Encryption",
     "User Roles & Permissions",
     "Monitoring & Performance Tools:",
     "MongoDB Atlas Dashboard",
     "Compass Performance Tab",
     "Data Migration Techniques",
     "Export/Import Data using mongoexport, mongoimport"
    ],
    notes:"notes.pdf"
  },
  {
    id: 6,
    title: 'Sources',
    description: 'Additional resources for further learning',
    details: 'Links to online courses, books, and articles for deeper understanding.',
    chapters:[
      "Online Courses: MongoDB University, Coursera, Udemy",
      "Books: 'MongoDB: The Definitive Guide', 'Learning MongoDB 4.x'",
      "Documentation: MongoDB Official Docs, Mongoose Docs",
      "Community: MongoDB Forums, Stack Overflow"
    ],
    url:[
      "https://www.mongodb.com/docs/",
      "https://mongoosejs.com/docs/",
      "https://university.mongodb.com/"
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
            <li><Link to="/Mongodb">Syllabus</Link></li>
            <li><Link to="/Mongodbassign">Assignment</Link></li>
            
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
              </div>
              
                )}
                {item.url && Array.isArray(item.url) && (
                  <div style={{marginTop:"10px"}}>
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
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Syllabus;