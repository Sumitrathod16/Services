import React, { useState } from 'react';

const coursesData = [
  {
    title: "Introduction to Html",
    description: "Brief history of the internet",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "What is HTML?",
      "History of the Web",
      "Importance of HTML"
    ]
  },
  {
    title: "HTML document structure",
    description: "Basic structure of an HTML document.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "DOCTYPE and HTML tag",
      "Head and Body",
      "Meta tags"
    ]
  },
  {
    title: "Text Formatting and Content",
    description: "Text formatting.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Headings",
      "Paragraphs",
      "Bold and Italics"
    ]
  },
  {
    title: "Links and Images",
    description: "Creating hyperLinks",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Anchor Tag",
      "Image Tag",
      "Relative vs Absolute Paths"
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