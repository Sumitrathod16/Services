import React from 'react';

function About() {
  return (
    <>
      <style>
        {`
          .about-container {
            padding: 20px;
            max-width: 800px;
            margin: auto;
            font-family: Arial, sans-serif;
            height: 500px;
            width: 100%;
          }
          .about-container h1 {
            text-align: center;
            color: #333;
          }
          .about-container p {
            line-height: 1.6;
            color: #555;
          }
          .about-container ul {
            list-style-type: disc;
            padding-left: 20px;
          }
          .about-container ul li {
            margin: 10px 0;
          }
          .about-container h2 {
            color: #444;
          }
          .about-container strong {
            color: #222;
          }
          .about-container em {
            color: #666;
          }
        `}

    <div className="about-container">
      <h1>About US!!</h1>
      <p><strong>DEMO</strong> is a modern web application built with <strong>React.js</strong> that empowers developers of all levels to <em>learn, practice, and grow</em> their development skills in an interactive, structured, and hands-on environment.</p>

      <h2> Our Mission</h2>
      <p>To bridge the gap between theory and real-world application by providing developers with practical coding exercises, interactive tutorials, and real-time feedback — all in a responsive, intuitive interface powered by React.</p>

      <h2> What We Offer</h2>
      <ul>
        <li><strong>Interactive Lessons:</strong> Learn by doing with paired challenges.</li>
        <li><strong>Progress Tracking:</strong> Monitor your progress and achievements.</li>
        <li><strong>Real-Time Code Editor:</strong> Practice directly in your browser.</li>
        <li><strong>Project-Based Learning:</strong> Build real-world, portfolio-ready apps.</li>
        <li><strong>Community Support:</strong> Connect, collaborate, and grow with others.</li>
      </ul>

      <h2> Built With React.js</h2>
      <p>DevLearn is built entirely with <strong>React.js</strong> for high performance, modularity, and a seamless experience.</p>

      <h2> Who Is It For?</h2>
      <p>Whether you're a beginner or an experienced developer, DevLearn has the content and tools to help you advance your React and web development skills.</p>
    </div>
  </style>
    </> 
  );
}; 
export default About;