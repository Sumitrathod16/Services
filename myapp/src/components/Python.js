import React, { useState } from 'react';

const coursesData = [
  {
    title: "1.Introduction to Python",
    description: "Brief history of the internet",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
    "What is Python",
    "Features and application of Python",
    "Installation & Environment Setup",
    "Introduction to Python shells and IDEs"

    ]
  },
  {
    title: "2.Variables,Keywords,Data types, and Identifiers",
    description: "Basic structure of an HTML document.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Variables",
      "Keywords",
      "Data types(int,float,str,bool,etc.)",
      "Identifiers",
      "Type casting"
    ]
  },
  {
    title: "3.Data structures",
    description: "Text formatting.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Strings",
      "Lists",
      "Tuples",
      "Sets",
      "Dictionaries"
    ]
  },
  {
    title: "4.Operators in Python",
    description: "Creating hyperLinks",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
    "Arithmetic Operators",
    "Logical Operators",
    "Realtional Operators",
    "Bitwise Operators",
    "Assignment Operators",
    "Membership Operators",
    "Identity Operators"  
    ]
  },
  {
    title: "5.Control Flow Statements",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Conditional Statements(if, elif, else)",
      "Looping Statements(for,while)",
      "break,continue , and pass"
    ]
  },
   {
    title: "6.Input and Output in Python",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "input() function",
      "print() function and formatting"
    ]
  },
   {
    title: "7.Functions",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Defining and calling functions",
      "Types of functions(Built-in,user-defined)",
      "Arguments(Positional,Keyword,Default,Variable-length)",
      "Return Statements",
      "Recursion",
      "Anonymous functions(lambda)"
    ]
  },
   {
    title: "8.Object-oriented Programming(OOPS) in python",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Classes and Objects",
      "__init__ Constructor",
      "Instance vs Class Variable",
      "Inheritance",
      "Method Overriding",
      "Access Specifiers(Public,Private,Protected)",
      "self Keyword",
      'super() Function'
    ]
  },
   {
    title: "9.Exception Handling",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "try,except,else,finally",
      "Raising Exceptions(raise)",
      "Custom Exceptions",
      "assert Statement"
    ]
  },
   {
    title: "10.Python Comprehensions",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "List Comprehension",
      "Dictionary Comprehension",
      "Set Comprehension"
    ]
  },
   {
    title:"11.Decorators",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Decorators"
    ]
  },
   {
    title: "12.Functional Programming Tools",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "map()",
      "filter()",
      "lambda Expressions",
      "reduce()"
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