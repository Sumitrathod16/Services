import React, { useState } from 'react';

const coursesData = [
  {
    title: "Introduction",
    description: "Brief history of the internet",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Java why? What? How? When? Where?",
      "Different Java Versions",
      "How java is different from other technologies",

    ]
  },
  {
    title: "Introduction to Java Programming Environment",
    description: "Basic structure of an HTML document.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "How to install & set path",
      "A simple java program",
      "Compiling and executing Java program",
      "Phases of java program",
      'Analysis of Java program',
      "Understanding syntax and semantic error",
      "Runtime exception",
      "Name of java source file",
      "Platform Independency",
      "Java technology (JDK,JRE,JVM,JIT)",
      "Text Editors",
      "Consoles"
    ]
  },
  {
    title: "Fundamentals of Java programming",
    description: "Text formatting.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
    "The naming convention of Java program",
    "Comments Statement",
    "Blocks(Static,Non-static/Instance)",
    "Identifiers,Keywords,Literals",
    "Primitive Data Types,Range",
    "Reference(user-defined) Data type",
    "Variables(Primitive ,Reference)",
    "Type casting, Default value",
    "Operators"
    ]
  },
  {
    title: "Control Structures",
    description: "Creating hyperLinks",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Working with control structures",
      "Types of control structures",
      "Decision control structure(if,if-else,if-else-if,switch-case)",
      "Repetition control structure(for,while,do-while)"
    ]
  },
  {
    title: "Input fundamentals and Datatypes in Java",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Java program inputs and Keywords",
      "Methods of keyboard inputs",
      "Scanner, BufferedReader",
      "Problem solving",
      "Java Array",
      "Instantiation of an Array",
      "String vs character array accessing array",
      "Elements, Default value,for-each loop,var args",
      "Length of an array(What is array index out of bounds exception)",
      "Increasing and decreasing the size of and copy of an array",
      "Multi dimensional arrays",
      "Application compilation and run"
    ]
  },
  {
    title: "Object Oriented Programming",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Procedural vs Object oriented programming",
      "Different types of program procedural and object oriented",
      "Top-down vs bottom-up approach",
      "Introuction to object oriented",
      "Abstraction, Encapsulation ,Inheritance",
      "Polymorphism",
      "Introduction to classes and objects",
      "Custom class Definition",
      "Instance and Static variables",
      "Different ways to create Object instance",
      "Instance variable and its role in class",
      "Constructors,types of constructors,constructor rule,Constructor overloading",
      "Static variables and its use",
      "Methods and their behavior",
      "Constructor vs methods",
      "this keyword",
      "Call by value, Call by reference"
    ]
  },
  {
    title: "Command line argument",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "What a command-line argument?",
      "Java application with command-line argument",
      "Conversion of command-line argument",
      "Parsing command-line argument",
      "Using methods(static,Non-static)"

    ]
  },
  {
    title: "Integrated Development Envirnment",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Using various Editors",
      "Program compilation, Execution in Editor",
      "Using Eclipse IDE",
      "Project set-up",
      "Source-File generation",
      "Application,Compilation and Run"
    ]
  },
  {
    title: "Inner class",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "First view of inner class",
      "Outer class access",
      "Types of inner class"
    ]
  },
  {
    title: "Types of inheritance",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Complete concept of Inheritance",
      "Sub-classes",
      "Object classes",
      "Constructor calling chain",
      "The use of 'super' keyword",
      "The use of 'private' keyword inheritance",
      "Reference casting"
    ]
  },
  {
    title: "Abstract classes and Inheritance",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
          "Introduction to Abstract methods",
          "Abstract classes and Interface",
          "Interface as a Type",
          "Interface vs Abstract class ",
          "Interface Definition",
          "Interface Implementation",
          "Multiple Interface implementation",
          "Interfaces inheritance",
          "How to create the object of interface"
    ]
  },
  {
    title: "Polymorphism",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Introduction to Polymorphism",
      "Types of Polymorphism",
      "Overloading methods",
      "Overriding methods",
      "Overriding methods",
      "Hiding methods",
      "Final class and Method",
      "Polymorphism Behavior in Java",
      "Benefits of Polymorphism",
      "'Is-A'vs'Has-A' ",
      "Association Vs Aggregation" 
    ]
  },
  {
    title: "Package",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Package and classPath and its use",
      "First look into Packages",
      "Benefits of Packages",
      "Package Creation and Use",
      "First,look into the classPath",
      "ClassPath Setting",
      "Class import",
      "Package import",
      "Role of public,protected,default and private with respect to package",
      "Namespace management",
      "Package vs header file",
      "Creating and Using the sub package",
      "Sources and class File Management"
   ]
  },
  {
    title: "",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Table Structure",
      "Form Inputs",
      "Submit Button"
    ]
  },
  {
    title: "Tables and Forms",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Table Structure",
      "Form Inputs",
      "Submit Button"
    ]
  },
  {
    title: "Tables and Forms",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Table Structure",
      "Form Inputs",
      "Submit Button"
    ]
  },
  {
    title: "Tables and Forms",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Table Structure",
      "Form Inputs",
      "Submit Button"
    ]
  },
  {
    title: "Tables and Forms",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Table Structure",
      "Form Inputs",
      "Submit Button"
    ]
  },
  {
    title: "Tables and Forms",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Table Structure",
      "Form Inputs",
      "Submit Button"
    ]
  },
  {
    title: "Tables and Forms",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Table Structure",
      "Form Inputs",
      "Submit Button"
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