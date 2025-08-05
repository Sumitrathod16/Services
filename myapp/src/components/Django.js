import React, { useState } from 'react';

const coursesData = [
  {
    title: "1.Introduction to Django",
    description: "Brief history of the internet",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
     "Understanding web development frameworks",
     "Introduction to Django and its features",
    "Installing Django and setting up a development environment",
     "Creating a simple Django project and app"
    ]
  },
  {
    title: "2.Django models and Database Integration",
    description: "Basic structure of an HTML document.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Creating models and defining database tables",
      "Working with Django’s Object-Relational Mapping (ORM)",
      "Performing database queries using Django’s QuerySet API",
      "Migrations and database schema evolution"  
    ]
  },
  {
    title: "3.Views and Templates",
    description: "Text formatting.",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Building views to handle HTTP requests",
      "Creating templates for dynamic HTML generation",
       "Routing and URL patterns in Django",
       "Passing data from views to templates"
    ]
  },
  {
    title: "4.Django Forms",
    description: "Creating hyperLinks",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Creating HTML forms in Django",
      "Form validation and handling form submissions",
       "Customizing form behavior with Django form classes",
       "Integrating forms with models"
    ]
  },
  {
    title: "5.Django admin and Panel",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Utilizing the Django admin interface for content management",
      "Customizing the admin panel for specific models",
       "Adding custom actions and filters"
    ]
  },
  {
    title: "6.Authentication and Autherization",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
           "Implementing user authentication in Django",
          "Managing user sessions and passwords",
          "Configuring permissions and authorization"
    ]
  },
  {
    title: "7.Django REST framework",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Introduction to RESTful APIs",
       "Building APIs with Django REST Framework",
       "Serializers, views, and authentication for APIs",
       "Consuming APIs in Django applications"
    ]
  },
  {
    title: "8.Frontend Integration with Django",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Integrating frontend frameworks (e.g., Bootstrap) with Django",
      "Using static files and media in Django projects",
      "AJAX and asynchronous behavior in Django applications"
    ]
  },
  {
    title: "9.Testing and Debugging in Django",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Writing unit tests for Django applications",
      "Debugging techniques and tools",
       "Best practices for testing in Django"
    ]
  },
  {
    title: "10.Deployment and scaling",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Preparing a Django application for deployment",
      "Choosing a hosting platform (e.g., Heroku, AWS)",
       "Configuring production settings",
        "Scaling Django applications"
    ]
  },
  {
    title: "11.Advanced Topics",
    description: "Creating tables",
    duration: "1 Week",
    instructor: "Areen Phadtare",
    chapters: [
      "Signals and event handling in Django",
     "Building custom middleware",
      "Caching strategies in Django",
      "Internationalization and localization"
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