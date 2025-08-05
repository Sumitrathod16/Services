import React, { useState } from 'react';

const coursesData = [
  {
    title: "1.Introduction to Node js",
    description: "Brief history of the internet",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Introduction to node js",
      "What is Node Js,Node.js Process Model",
      "Advantages of Node js ",
      "Traditional Web Server Model"
    ]
  },
  {
    title: "2.Setup  Development Environment",
    description: "Node js environment setup.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Install Node.js on Windows",
      "Working in REPL,Node js Console"
    ]
  },
  {
    title: "3.Node js Modules",
    description: "Modules.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Functions,Buffer,Module",
      "Core Modules, Local Modules",
      "Modules Types",
      "Modules Exports"
    ]
  },
  {
    title: "4.Node Package Manager",
    description: "Creating hyperLinks",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "What is NPM,Installing Package locally",
      "Adding dependency in package Json",
      "Installing package globally",
      "Updating package"
    ]
  },
  {
    title: "5.Creating Web Server",
    description: "Creating server",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Creating web server",
      "Handling http requests",
      "Sending requests"
    ]
  },
  {
    title: "6.File System",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Fs.readFile, writing a file",
      "Writing a file asynchronously",
      "Opening a file, Deleting a file",
      "Other IO Operations"
    ]
  },
  {
    title: "7.Debugging Node js Application",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Core node JS debugger"
    ]
  },
  {
    title: "8.Events",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Event Emitter class",
      "Returning Event emitter",
      "Inheriting events"
    ]
  },
  {
    title: "9.Express Js",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Configuring Routes",
      "Working With express",
    
    ]
  },
  {
    title: "10.Serving Static Resources",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Serving static files",
      "Working with middle Ware",
      
    ]
  },
  {
    title: "11.Database Connectivity",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Connecting String,Configuring",
      "Working with Select command",
      "Updating records",
      "Deleting records"
    ]
  },
  {
    title: "12.Project Development",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Project Development using node js"
    ]
  }
];

const AccordionCourses = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
  <>
<style>
    {`
    .accordion-container {
  max-width: 90%;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

.accordion-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.accordion-item {
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 10px;
  overflow: hidden;
}

.accordion-button {
  width: 100%;
  padding: 15px;
  background-color: #f2f2f2;
  border: none;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;
}

.accordion-button:hover {
  background-color: #e0e0e0;
}

.accordion-content {
  padding: 15px;
  background-color: #fff;
  border-top: 1px solid #ccc;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
  .accordion-chapters {
  margin-top: 10px;
}

.accordion-chapters ol {
  margin-left: 20px;
  padding-left: 10px;
}

.accordion-chapters li {
  margin-bottom: 6px;
  list-style-type: decimal;
}
    `}
    </style>  
    <div className="accordion-container">
      <h2 className="accordion-title">Available Courses</h2>
      {coursesData.map((course, index) => (
        <div key={index} className="accordion-item">
          <button
            onClick={() => toggleAccordion(index)}
            className="accordion-button"
          >
            {course.title}
          </button>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{course.description}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <div className="accordion-chapters">
                <p><strong>Chapters:</strong></p>
                <ol>
                  {course.chapters.map((chapter, idx) => (
                    <li key={idx}>{chapter}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default AccordionCourses;