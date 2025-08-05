import React, { useState } from 'react';

const coursesData = [
  {
    title: "1.Introduction ",
    description: "Brief history of the internet",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Introduction to machine learning",
      "Performance of measures of classification",
      "Bias-Variance Tradeoff",
      "Regression"
    ]
  },
  {
    title: "2.Bayesian Decision Theory",
    description: "Basic structure of an HTML document.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Bayesian Belief Networks"
    ]
  },
  {
    title: "3.Parametric Approaches and Non-parametric Approaches",
    description: "Text formatting.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Parameter Estimation and Maximum likelihood Estimation",
      "Parameter Estimation and Bayesian Estimation",
      "Concept of non-parametric techniques",
      'Density Estimation by Parzen window',
      "Parzon window and k-nearest neighbor algorithm",

    ]
  },
  {
    title: "4.Perceptron Criteria and Discriminative Models",
    description: "Creating hyperLinks",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Linear discriminant Functions and perceptron Criteria",
      "Support Vector Machine"
    ]
  },
  {
    title: "5.Logistic Regression, Decision trees and Hidden Markov Model",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Logisitc Regression ",
      "Decision tree",
      "Hidden Markov Model(HMM)"
    ]
  },
  {
    title: "6.Ensemble Methods",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Ensemble Classifiers",
    
    ]
  },
  {
    title: "7.Dimensionality Problems",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Dimensionality Problem and Principal Component analysis",
      "Principal Component analysis",
      "Linear Discriminant analysis"
    ]
  },
  {
    title: "8.Mixture model and clustering",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Gaussian Mixture Model and EM algorithm",
      "K-means clustering",
      ""
    ]
  },
  {
    title: "9.Clustering",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Fuzzy k-means clustering",
      "Hierarchical Agglomorative clustering and Mean-shift Clustering"
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
      <h2 className="accordion-title">Syllabus</h2>
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