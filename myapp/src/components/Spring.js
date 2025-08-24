import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css';

const syllabusData = [
  {
    id: 1,
    title: 'Spring core(Ioc container  & Dependency Injection',
    description: '',
    details: '',
    
    chapters: [
    "Inversion of Control (IoC)",
   "Dependency Injection (DI)",
   "Bean Lifecycle",
    "ApplicationContext & BeanFactory"
    ],
    notes:"notes.pdf"
  },
  {
    id: 2,
    title: 'Spring AOP',
    description: 'Understanding the architecture and function of ANNs',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
    
    chapters: [
      "Cross-cutting concerns",
      "Aspects,Join Points, Pointcuts",
      "Advice types",
      "Use cases"
],
notes:"notes.pdf"
  },
  {
    id: 3,
    title: 'Spring Data & ORM Integration',
    description: '',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
    
    chapters: [
    "Spring Data JPA",
    "Repositories",
    "ORM Support",
    "Transaction Management"
],
notes:"notes.pdf"
  },
  {
    id: 4,
    title: 'Spring MVC',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
      "Controllers",
      "Request Mapping",
      "ViewResolvers & Templates",
      "REST APIs"
    ],
    notes:"notes.pdf"
  },
  {
    id: 5,
    title: 'Spring Boot',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
  
    chapters: [
      "Auto Configuration",
      "Starter Dependecies",
      "Spring Boot",
      "Embedded Servers"
],
notes:"notes.pdf"
  },
  {
    id: 6,
    title: 'Spring Security',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    
    chapters: [
      "Authentication and Authorization",
      "Custom Security",
      "OAuth2 & JWT",
      "Method-level security"
    ],
    notes:"notes.pdf"
  },
  {
    id: 7,
    title: 'Spring Testing',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    chapters: [
      "Unit Testing",
      "Integration Testing",
      "Test Utilities",
      "Data testing"
    ],
    notes:"notes.pdf"
  },
  {
    id: 8,
    title:"Sources",
    description: 'Additional resources for further learning',
    details: 'Links to official documentation, tutorials, and community resources.',
    chapters:[
      "Spring Documentation",
      "Spring Boot Documentation",
      "Online Courses (Coursera, Udemy, etc.)",
      "YouTube Channels (Java Brains, Spring Academy, etc.)",
      "GitHub Repositories and Open Source Projects"
    ],
    url: [
      "https://spring.io/projects/spring-framework",
      "https://spring.io/projects/spring-boot",
      "https://www.udemy.com/topic/spring-framework/",
      "https://www.youtube.com/c/JavaBrainsChannel",
      "https://www.youtube.com/c/SpringAcademy"
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
      
      <div className="main-container">
        <aside className="sidebar">
          <h2>Syllabus</h2>
          <ul>
            <li><Link to="/Spring">Syllabus</Link></li>
          <li><Link to="/Springassign">Assignment</Link></li>
            
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
                      {item.url.map((link,idx) =>(
                        <li key={idx}>
                          <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: "#4f46e5", textDecoration: "none" }}>
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