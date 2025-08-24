import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Syllabus.css';
const syllabusData = [
  {
    id: 1,
    title: "Introduction to Flutter",
    description: "",
    details:
      "This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.",

    chapters: [
      "Learn to setup new material app using android studio",
      "Overview of Flutter",
      "Basic Dart Programming concepts",
      "Understanding the widgets",
      "Displaying the content on screen",
      "Debugging and testing app with flutter",
    ],
    notes: "notes.pdf",
  },
  {
    id: 2,
    title: "Stateful and stateless widdgets",
    description: "Understanding the architecture and function of ANNs",
    details:
      "Here, we dive into perceptrons, activation functions, and forward/backward propagation.",

    chapters: [
      "Stateless vs Stateful widgets",
      "Define State",
      "The setState() method",
    ],
    notes: "notes.pdf",
  },
  {
    id: 3,
    title: "Forms",
    description: "",
    details:
      "This module explains how deep architectures differ and how to train them effectively.",

    chapters: [
      "Creating login and signup forms",
      "Handling User input",
      "Form Validation",
      "Submitting form and retrieve data",
    ],
    notes: "notes.pdf",
  },
  {
    id: 4,
    title: "Widgets",
    description: "Latest advancements and future directions of the field",
    details:
      "You’ll learn about transformers, foundation models, and cutting-edge applications.",

    chapters: [
      "Creating login and signup forms",
      "Handling User input",
      "Form Validation",
      "Submitting form and retrieve data",
    ],
    notes: "notes.pdf",
  },
  {
    id: 5,
    title: "User Interface",
    description: "Latest advancements and future directions of the field",
    details:
      "You’ll learn about transformers, foundation models, and cutting-edge applications.",

    chapters: ["Applying theme data", "Applying custom font"],
    notes: "notes.pdf",
  },
  {
    id: 6,
    title: "Asynchronous Function",
    description: "Latest advancements and future directions of the field",
    details:
      "You’ll learn about transformers, foundation models, and cutting-edge applications.",

    chapters: ["Future Function", "Async and Await"],
    notes: "notes.pdf",
  },
  {
    id: 7,
    title: "Working with the App data",
    description: "Latest advancements and future directions of the field",
    details:
      "You’ll learn about transformers, foundation models, and cutting-edge applications.",

    chapters: [
      "Http Package",
      "Model class and json Parsing",
      "Displaying API data",
    ],
    notes: "notes.pdf",
  },
  {
    id: 8,
    title: "Navigation",
    description: "Latest advancements and future directions of the field",
    details:
      "You’ll learn about transformers, foundation models, and cutting-edge applications.",

    chapters: ["Navigator and Routes", "Applying push() and pop()"],
    notes: "notes.pdf",
  },
  {
    id: 9,
    title: "Container",
    description: "Latest advancements and future directions of the field",
    details:
      "You’ll learn about transformers, foundation models, and cutting-edge applications.",

    chapters: [
      "Container",
      "Card",
      "Importing images from network",
      "Importing images as assets",
      "Understanding row and columns",
      "Listview and ListTile",
      "GridView",
      "Alert dialogbox",
      "Building views using listview.builder",
    ],
    notes: "notes.pdf",
  },
  {
    id: 10,
    title: "Offline Storage",
    description: "Latest advancements and future directions of the field",
    details:
      "You’ll learn about transformers, foundation models, and cutting-edge applications.",
    chapters: [
      "Basic concept of sqlite database",
      "Database Connection",
      "CRUD operation on flutter database",
    ],
    notes: "notes.pdf",
  },
  {
    id: 11,
    title: "Basic GIT",
    description: "Latest advancements and future directions of the field",
    details:
      "You’ll learn about transformers, foundation models, and cutting-edge applications.",

    chapters: [],
    notes: "notes.pdf",
  },
  {
    id: 12,
    title: "Sources",
    description: "Additional resources for further learning",
    details:
      "Links to online courses, books, and articles for deeper understanding.",
    chapters: [
      "Online Courses: Coursera, edX, Udacity",
      "Flutter Documentation: https://flutter.dev/docs",
      "Flutter YouTube Channel: https://www.youtube.com/c/flutterdev",
      "Flutter Community: https://flutter.dev/community",
    ],
    url: [
      "https://flutter.dev/docs",
      "https://www.youtube.com/c/flutterdev",
      "https://flutter.dev/community",
    ],
  },
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
            <li>
              <Link to="/Flutter">Syllabus</Link>
            </li>
            <li>
              <Link to="/Flutterassign">Assignment</Link>
            </li>
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
                <h3>
                  {item.id}. {item.title}
                </h3>
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
                          style={{
                            color: "#4f46e5",
                            textDecoration: "underline",
                          }}
                        >
                          Download Notes
                        </a>
                      </div>
                    )}
                    {item.url && Array.isArray(item.url) && (
                      <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                        <strong>Useful Links:</strong>
                        <ul>
                          {item.url.map((link, index) => (
                            <li key={index}>
                              <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#4f46e5",
                                  textDecoration: "none",
                                }}
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
