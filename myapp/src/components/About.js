import React from 'react';
function About() {
  return (
    <>
      <style>
        {`
          .about-container {
            padding: 32px 20px;
            max-width: 900px;
            margin: 40px auto;
            font-family: 'Segoe UI', Arial, sans-serif;
            background: #f8fafc;
            border-radius: 16px;
            box-shadow: 0 4px 24px rgba(30,41,59,0.08);
          }
          .about-container h1 {
            text-decoration: underline;
            font-size: 2.8em;
            text-align: center;
            color: black;
            margin-bottom: 18px;
            letter-spacing: 1px;
          }
          .about-container p {
            line-height: 1.7;
            color: #334155;
            font-size: 1.15em;
            margin-bottom: 18px;
          }
          .about-container ul {
            list-style-type: disc;
            padding-left: 28px;
            margin-bottom: 22px;
          }
          .about-container ul li {
            margin: 12px 0;
            font-size: 1.08em;
            color: #475569;
          }
          .about-container h2 {
            padding-top: 24px;
            color:black;
            font-size: 1.5em;
            margin-bottom: 10px;
            letter-spacing: 0.5px;
          }
          .about-container strong {
            color: #1e293b;
            font-weight: 600;
          }
          .about-container em {
            color: #64748b;
            font-style: italic;
          }
          .about-highlight {
            background: #e0e7ff;
            padding: 6px 12px;
            border-radius: 8px;
            display: inline-block;
            margin-bottom: 12px;
            font-size: 1.08em;
            color: black;
            font-weight: 500;
          }
        `}

        </style>

    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-highlight">Empowering Developers, One Challenge at a Time</div>
      <p><strong>DEMO</strong> is a modern web application built with <strong>React.js</strong> that empowers developers of all levels to <em>learn, practice, and grow</em> their development skills in an interactive, structured, and hands-on environment.</p>

      <h2>Our Mission</h2>
      <p>To bridge the gap between theory and real-world application by providing developers with practical coding exercises, interactive tutorials, and real-time feedback — all in a responsive, intuitive interface powered by React.</p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Interactive Lessons:</strong> Learn by doing with paired challenges.</li>
        <li><strong>Progress Tracking:</strong> Monitor your progress and achievements.</li>
        <li><strong>Real-Time Code Editor:</strong> Practice directly in your browser.</li>
        <li><strong>Project-Based Learning:</strong> Build real-world, portfolio-ready apps.</li>
        <li><strong>Community Support:</strong> Connect, collaborate, and grow with others.</li>
      </ul>

      <h2>Built With React.js</h2>
      <p>DevLearn is built entirely with <strong>React.js</strong> for high performance, modularity, and a seamless experience.</p>

      <h2>Who Is It For?</h2>
      <p>Whether you're a beginner or an experienced developer, DevLearn has the content and tools to help you advance your React and web development skills.</p>
    </div>
  
    </> 
  );
}; 
export default About;