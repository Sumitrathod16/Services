import React, { useState } from 'react';

const coursesData = [
  {
    title: "1.Introduction to Flutter",
    description: "Brief history of the internet",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Learn to setup new material app using android studio",
    "Overview of Flutter",
    "Basic Dart Programming concepts",
    "Understanding the widgets",
    "Displaying the content on screen",
    "Debugging and testing app with flutter"
      
    ]
  },
  {
    title: "2.Stateful and stateless Widgets",
    description: "",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
    "Stateless vs Stateful widgets",
    "Define State",
    "The setState() method"
    ]
  },
  {
    title: "3.Forms",
    description: "Text formatting.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
   "Creating login and signup forms",
   "Handling User input",
   "Form Validation",
   "Submitting form and retrieve data"
    ]
  },
  {
    title: "4.Widgets",
    description: "Creating hyperLinks",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
    "Material App and Scaffold wigets",
    "Appbar",
    "FloatingActionButton"
    ]
  },
  {
    title: "5.User Interface",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Applying theme data",
      "Applying custom font"
    ]
  },{
    title: "6.Asynchronous Function",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Future Function",
      "Async and Await"
    ]
  },{
    title: "7.Working with App data",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Http Package",
      "Model class and json Parsing",
      "Displaying API data"
    ]
  },{
    title: "8.Navigation",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Navigator and Routes",
      "Applying push() and pop()"
    ]
  },
  {
    title: "9.Container",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Container",
      "Card",
      "Importing images from network",
      "Importing images as assets",
      "Understanding row and columns",
      "Listview and ListTile",
      "GridView",
      "Alert dialogbox",
      "Building views using listview.builder"
    ]
  },
  {
    title:"10.Offline Storage",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
    "Basic concept of sqlite database",
    "Database Connection",
    "CRUD operation on flutter database"
    ]
  },{
    title: "11.Basic GIT",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      
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