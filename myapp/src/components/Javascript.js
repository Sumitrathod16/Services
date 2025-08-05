import React, { useState } from 'react';

const coursesData = [
  {
    title: "1.Introduction to Javascript",
    description: "Brief history of the Javascript",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "What is Javascript?",
      "History and evolution",
      "Javascript vs ECMAscript",
      "Setting up the environment"
    ]
  },
  {
    title: "2.Basics of Javascript",
    description: "Basic structure of Javascript.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Syntax and structure",
      "Variable(var,let,const)",
      "Data types(Primitive and Reference types",
      "Operators(Arithmetic,Logical comparison",
      "Type conversion and coericon"
    ]
  },
  {
    title: "3.Control Structures",
    description: "Using statements.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Conditional Statements",
      "Loops(for,while,do-while)",
      "Break and Continue"
    ]
  },
  {
    title: "4.Functions",
    description: "It is the block of code which is reusable",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Function declaration and expression",
      "Arrow functions",
      "Parameters and arguments",
      "Scope(Global,Local,Block)"
    ]
  },
  {
    title: "5.Objects and Arrays",
    description: "",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Object creation and Manipulation",
      "Arrays and their methods",
      "Iterating over objects and arrays",
      "Destructing"

    ]
  },
  {
    title: "6.DOM Manipulation",
    description: "Document Object model",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Document object model(DOM) overview",
      "Selecting elements(getElementById,querySelector)",
      "Modifying Elements",
      "Event handling(addEventListener,eventTypes)"

    ]
  },
  {
    title: "7.Advanced Javascript",
    description: "Enhanced javascript",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Prototypes and inheritance",
      "Classes and Objects",
      "Modules(Import/Export)",
      "Promises and async/await",
      "Error handling(try,catch,finally) "

    ]
  },
  {
    title: "8.Browser and APIs",
    description: "",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "LocalStorage and SessionStorage",
      "Fetch API and AJAX",
      "Geolocation API",
      "Web APIs(Canvas,Notifications)"

    ]
  } ,
  {
    title: "9.ES6+ Features",
    description: "",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Template Literals",
      "Default Parameters",
      "Spread/rest operators",
      "Destructing assignment",
      "New data Structures(Map,Set)"

    ]
  },
  {
    title: "10.Debugging and testing",
    description: "",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Debugging tools(Browser,webtools)",
      "Writing test cases(Jest,Mocha)",
      "Common debugging techniques"

    ]
  },
  {
    title: "11.Framework and Libraries",
    description: "",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Intoduction to popular libraries(e.g.,jQuery)",
      "Overview of frameworks(React, Angular,Vue)"
      

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