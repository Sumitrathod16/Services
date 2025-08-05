import React, { useState } from 'react';

const coursesData = [
  {
    title: "1.Overview of MongoDB",
    description: "Brief history of the internet",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Introduction to MongoDb",
      "NO SQl Database",
      "Advantages over RDBMS",
      "Install MongoDB",
      "MongoDb data modelling"
    ]
  },
  {
    title: "2.MongoDb Operators",
    description: "",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      " Query & Projection Operator",
      "MongoDb Update operator",
      "Aggregation pipeline Stages",
      "MongoDb limit",
      "MongoDb sort",
      "Query Modifiers"
    ]
  },
  {
    title: "3.Database Commands",
    description: "Text formatting.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Aggregation Commands",
      "Geospatial Command",
      "Query and  write operation  Commands",
      "Query plan  Cache Commands",
      "Authentication Commands",
      "User Management Commands",
      "Role Management Commands",
      "Replication Command",
      "Shading Commands",
      "Session Commands"
    ]
  },
  {
    title: "4.Database",
    description: "Creating hyperLinks",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Create Database",
      "Drop Database"
    ]
  },
  {
    title: "5.Collection",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Create Collection",
      "Drop Collection"
    ]
  },
  {
    title: "6.CRUD :Documents",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Inset Documents",
      "Update Documents",
      "Delete Documents",
      "Query Documents",
      "SQL to MongoDb Mapping",
      "MongoDb text search",
      "Partial updates & Documents Limits",
      "Removing Documents",
      "Multi update",
      "Wire Protocol",
      "Bulk() operations and methods",
      "Common Commands",
      "db.runCommand()",
      "db.isMaster()",
      "db.serverStatus()",
      "db.currentOp() & db.killOp()",
      "collection.stats() & collection.drop()"

    ]
  },
  {
    title: "7.MongoDb shell",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "MongoDb shell",
      "Shell collection Methods",
      "Cursor Methods",
      "MongoDb database commands",
      "Query plan cache Methods",
      "User management  Method",
      "Role management method",
      "MongoDb replication Methods"
    ]
  },
  {
    title: "8.MongoDb cloud",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "MongoDb stitch",
      "MongoDb Atlas",
      "MongoDb cloud Manager",
      "MongoDb Ops Manager" 
    ]
  },
  {
    title: "9.MongoDb Tools",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "MongoDb Compass",
      "MongoDb BI connector"
    ]
  },
  {
    title:"10.Connectivity",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Java MongoDb",
      "PHP MongoDb",
      "Python MongoDb"
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