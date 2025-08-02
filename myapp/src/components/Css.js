import React, { useState } from 'react';

const coursesData = [
  {
    title: "Introduction to CSS",
    description: "Purpose and role in web development",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "What is CSS?",
      "Why use CSS ?",
      "CSS syntax"
    ]
  },
  {
    title: "Stylling Basics",
    description: "Stylling to Web.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Text formatting",
      "Color and background",
      "Borders and Outlines"
    ]
  },
  {
    title: "Layouts and Positioning",
    description: "Layouts to Web.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Display Property",
      "Positioning",
      "Float and clear"
    ]
  },
  {
    title: "Advanced CSS",
    description: "Intro to advanced css",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "CSS3 Features",
      "Transitions and Animations",
      "Responsive web design"
    ]
  },
  {
    title: "Other Topics",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "CSS Specificity",
      "Units of Measurement",
      "CSS variables"
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