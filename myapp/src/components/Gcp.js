import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const syllabusData = [
  {
    id: 1,
    title: 'Core Cloud Services & Infrastructure',
    description: 'Fundamental concepts of deep learning and its applications',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
  
    chapters: [
      "Compute Services",
      "Compute Engine (VMs)",
      "App Engine (PaaS)",
      "Cloud Functions (Serverless)",
      "Google Kubernetes Engine (GKE)",
      "Cloud Run (containers)",
      "Networking",
      "VPC (Virtual Private Cloud)",
      "Load Balancing",
      "Cloud CDN",
      "Cloud Interconnect / VPN",
      "Cloud DNS",
      "Firewall Rules",
      "Storage",
      "Cloud Storage (Object storage)",
      "Persistent Disks",
      "Filestore (File storage)",
      "Local SSDs"
    ],
    notes:"notes.pdf"
  },
  {
    id: 2,
    title: '. Identity, Security & Governance',
    description: 'Understanding the architecture and function of ANNs',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
  
    chapters: [
      "IAM (Identity and Access Management)",
      "Service Accounts & Roles",
      "Cloud Identity / Google Workspace integration",
      "Security Services",
      "Cloud Armor (DDoS protection)",
      "Secret Manager",
      "Security Command Center",
      "Key Management Service (KMS)",
      "Compliance & Governance",
      "Organization Policies",
      "Resource Hierarchy (Org > Folder > Project)",
      "Audit Logs",
      "Policy Intelligence"
    ],
    notes:"notes.pdf"
  },
  {
    id: 3,
    title: ' Data, AI & Machine Learning',
    description: 'Exploring multi-layered neural networks and their power',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
  
    chapters: [
    "Data Management",
    "BigQuery (Data warehouse)",
    "Cloud SQL (Managed SQL)",
    "Cloud Spanner (Global distributed DB)",
    "Firestore / Datastore (NoSQL)",
    "Cloud Bigtable (Wide-column NoSQL)",
    "Data Processing & Analytics",
    "Dataflow (Stream & batch processing)",
   "Dataproc (Managed Hadoop/Spark)",
   "Pub/Sub (Messaging)",
    "AI & ML",
    "Vertex AI (ML platform)",
    "AutoML",
    "Vision AI, Speech-to-Text, Natural Language AI",
    "Dialogflow (Chatbots)  ",
    ],
    notes:"notes.pdf"
  },
  {
    id: 4,
    title: ' Developer Tools & DevOps',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
  "Development Tools",
   "Cloud SDK / gcloud CLI",
   "Cloud Shell",
   "Cloud Source Repositories",
   "APIs & API Gateway",
   "CI/CD & DevOps ",
   "Cloud Build (CI/CD)",
   "Artifact Registry",
   "Cloud Deploy",
   "Monitoring & Logging (Cloud Monitoring, Cloud Logging)",
   "Error Reporting & Debugger"  
    ],
    notes:"notes.pdf"
  },
  {
    id: 5,
    title: 'Sources',
    description: 'Additional resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters: [
      "Google Cloud Documentation",
      "Google Cloud Training",
      "Online Courses (Coursera, Udemy, etc.)",
      "Google Cloud Blog",
      "YouTube Channels (Google Cloud Platform, GCP Podcast)"
    ],
    url: [
      "https://cloud.google.com/docs",
      "https://cloud.google.com/training",
      "https://www.coursera.org/googlecloud",
      "https://www.udemy.com/topic/google-cloud-platform/",
      "https://cloud.google.com/blog",
      "https://www.youtube.com/c/googlecloudplatform"
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
            <li><Link to="/GCP">Syllabus</Link></li>
            <li><Link to="/Gcpassign">Assignment</Link></li>
        
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
                  <div style={{marginLeft:"20px", marginTop: "10px" }}>
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