import React, { useState } from 'react';

const coursesData = [
  {
    title: "1.Introduction to React",
    description: "Brief history of the internet",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "What is react and its features",
      "Advantages of react",
      "React vs.other frameworks",
      "Setting up the development environment",
      "Introduction to JSX"
    ]
  },
  {
    title: "2.React Basics",
    description: "Basic structure of an HTML document.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Components:Functional and class-based",
      "Props and State",
      "Lifecycle Methods",
      "Handling Events",
      "Conditional rendering",
      "List and keys"
    ]
  },
  {
    title: "3.Advanced react components",
    description: "Text formatting.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Context API",
      "High-order Components(HOC)",
      "Error Boundaries",
      "React fragments",
      "Portals"
    ]
  },
  {
    title: "4.React Hooks",
    description: "Creating hyperLinks",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Introduction to Hooks",
      "useState,useEffect,useContext",
      "custom Hooks",
      "useReducer,useMemo,useCallback"
    ]
  },
  {
    title: "5.React Router",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Introduction to React router",
      "Routing  and Navigation",
      "Dynamic Routing",
      "Nested Routes"
    ]
  },
  {
    title: "6.State Management",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Introduction to Redux",
      "Actions,Reducers, and store",
      "Middleware(e.g.Thunk,saga)",
      "Redux Toolkit",
      "Context API vs .Redux"
    ]
  },
  {
    title: "7.Stylling in React",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "CSS modules",
      "Styled Components",
      "Emotion",
      "Inline styling"
    ]
    },
  {
    title: "8.API Integration",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
    "Fetching data with Fetch API and Axios",
      "Handling promises and Async/Await",
      " Error Handling",
      "Working with Rest APIs"
    ]
  },
  {
    title: "9.Testing in react",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Introduction to Testing",
      "Unit Testing with Jest",
      "Component testing with react testing library",
      "Snapshot testing",
      "End-to-end testing with Cypress"
    ]
  },
  {
    title: "10.Performance Optimization",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "React.memo",
      "Lazy loading and suspense",
      "Code splitting",
      "Optimizing React Applications"
    ]
  },
  {
    title: "11.Deployment",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Building and bundling react apps",
      "Hosting on platforms(Netlify,vecel)",
      "Continuous Integration/Continuous Deployment(CI/CD)"
      
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