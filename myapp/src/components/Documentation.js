import React from 'react';

function App() {
  return (
    <>
      {/* Internal CSS */}
      <style>{`
        .header {
          background-color: #2c3e50;
          color: white;
          text-align: center;
          height:100px;
          width:100%;
        }

        .main {
          padding: 40px 20px;
          max-width: 1000px;
          margin: 0 auto;
          background:rgba(209, 219, 223, 0.57);
          box-shadow: 0 10px 10px rgba(0,0,0,0.05);
          

        }
          
        .h1{
           color:white
           }

         .h2, h3 {
          color: #011324ff;
        }

        .code {
          background: #f0f0f0;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .section pre {
          background: #eee;
          padding: 10px;
          overflow: auto;
        }

        .section ul, ol {
          padding-left: 20px;
        }

        .table {
          border-collapse: collapse;
          width: 100%;
          margin-top: 10px;
        }

       .th, td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: left;
        }

        .footer {
          text-align: center;
          padding: 20px;
          background-color: #ecf0f1;
          font-size: 14px;
        }

        .section {
        padding: 40px 20px;
          max-width: 1000px;
          margin: 0 auto;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          }
        .section:hover{
          box-shadow: 0 15px 15px rgba(0,0,0,0.2);
          animation:ease-in-out;
          }
        @keyframe main{
         from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .main {
          animation-name: fadeSlideIn;
        }
        }    
     
     
     
     `}

      
      </style>

    <div className="header">
        <h1>🚀 Developer Launchpad</h1>
        <p>Your gateway into the world of software development</p>
    </div>

      
    <div className='main'>
        <div className="section">
          <h2>📘 What is Developer Launchpad?</h2>
          <p>
            Developer Launchpad is an educational platform designed for beginners who want to become professional developers. It provides learning paths, project-based learning, real-world challenges, and job readiness tools to help learners start strong.
          </p>
        </div>
    

        <div className="section">
          <h2>🔧 Core Features</h2>
          <ul>
            <li>Structured learning paths (Frontend, Backend, Mobile, Full-Stack)</li>
            <li>Interactive coding lessons and quizzes</li>
            <li>Browser-based code playground</li>
            <li>Portfolio builder & GitHub integration</li>
            <li>Mini-projects and real-world apps</li>
            <li>Career toolkit: resume builder, mock interviews, interview prep</li>
            <li>Mentorship and active community support</li>
          </ul>
        </div>

        <div className="section">
          <h2>🧭 Getting Started</h2>
          <ol>
            <li>Sign up on <a href="#">developerlaunchpad.app</a></li>
            <li>Choose your development track (e.g. Frontend Developer)</li>
            <li>Complete interactive lessons and quizzes</li>
            <li>Build portfolio projects with guided support</li>
            <li>Use career tools to apply for internships and jobs</li>
          </ol>
        </div>


        <div className="section">
          <h2>💻 Tech Stack</h2>
          <table>
            <thead>
              <tr>
                <th>Layer</th>
                <th>Technology</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frontend</td>
                <td>React.js, Tailwind CSS</td>
              </tr>
              <tr>
                <td>Backend</td>
                <td>Node.js, Express.js</td>
              </tr>
              <tr>
                <td>Database</td>
                <td>MongoDB</td>
              </tr>
              <tr>
                <td>Authentication</td>
                <td>Firebase Auth</td>
              </tr>
              <tr>
                <td>Compiler</td>
                <td>Judge0 API</td>
              </tr>
              <tr>
                <td>Hosting</td>
                <td>Vercel / Firebase Hosting</td>
              </tr>
            </tbody>
          </table>
        </div>
        

        <div className="section">
          <h2>📂 Folder Structure</h2>
          <pre>
/client         → React frontend  
/server         → Node/Express backend  
/database       → MongoDB models  
/public         → Static files  
/utils          → Shared functions  
/docs           → Documentation files  
          </pre>
        </div>

        <div className="section">
          <h2>🤝 Contribution Guide</h2>
          <pre>
# 1. Fork the repository
# 2. Clone it to your machine
git clone https://github.com/your-username/dev-launchpad.git

# 3. Install dependencies
npm install && cd client && npm install

# 4. Run the app
npm run dev
          </pre>
        </div>

        <div className="section">
          <h2>❓ Frequently Asked Questions</h2>
          <p><strong>Q: Is Developer Launchpad free?</strong><br />
            A: Yes! Most features are free. Premium mentorship and career services may be optional.</p>

          <p><strong>Q: Do I need prior experience?</strong><br />
            A: No, the app is built for absolute beginners.</p>

          <p><strong>Q: Can I use it to build a portfolio?</strong><br />
            A: Absolutely. You’ll work on real-world projects you can showcase.</p>
        </div>

        <div className="section">
          <h2>📬 Contact & Support</h2>
          <ul>
            <li>Email: support@developerlaunchpad.app</li>
            <li>GitHub Issues: <a href="#">github.com/dev-launchpad/issues</a></li>
            <li>Discord: <a href="#">Join our community</a></li>
          </ul>
        </div>

        <div className="section">
          <h2>📜 License</h2>
          <p>This project is licensed under the MIT License.</p>
        </div>
      

      {/* Footer */}
      <div className="footer">
        &copy; 2025 Developer Launchpad. Built for developers, by developers.
      </div>
     </div> 
  </>
  );
}

export default App;
