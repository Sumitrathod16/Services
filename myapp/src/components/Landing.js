import React from "react";
import userImg from '../assets/user.svg';
import aiImg from '../assets/ai.svg';
import codeImg from '../assets/code.svg';
import trendImg from '../assets/trendesetter.svg';
import portfolioImg from '../assets/portfolio.svg';

function LandingPage() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      <style>{`
        .landing-bg {
          min-height: 100vh;
          background: linear-gradient(120deg, #00bfff 0%, #181818 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .glass-card {
          background: rgba(255,255,255,0.12);
          border-radius: 24px;
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.18);
          padding: 48px 36px;
          max-width: 480px;
          text-align: center;
        }
        .landing-title {
          font-size: 2.8em;
          font-weight: 800;
          color: #fff;
          margin-bottom: 18px;
          letter-spacing: 1px;
          text-shadow: 0 2px 16px #00bfff88;
        }
        .landing-desc {
          font-size: 1.2em;
          color: #e0e0e0;
          margin-bottom: 32px;
          line-height: 1.5;
        }
        .cta-btn {
          background: linear-gradient(90deg, #00bfff 60%, #ff9800 100%);
          color: #fff;
          font-size: 1.1em;
          font-weight: bold;
          padding: 16px 40px;
          border: none;
          border-radius: 12px;
          box-shadow: 0 2px 12px #00bfff44;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cta-btn:hover {
          transform: scale(1.07);
          box-shadow: 0 4px 24px #ff9800aa;
        }
        .info-containers {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 32px;
          margin-top: 48px;
        }
        .info-card {
          background: rgba(255, 255, 255, 1);
          border-radius: 18px;
          box-shadow: 0 4px 24px 0 rgba(31,38,135,0.22);
          padding: 32px 24px;
          max-width: 320px;
          min-width: 220px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
        }
        .info-card:hover {
          transform: translateY(-8px) scale(1.04);
          box-shadow: 0 8px 32px #00bfff55;
          animation: hoverAnim 0.7s;
        }
        @keyframes hoverAnim {
          0% { opacity: 0.7; transform: scale(0.95) translateY(0); }
          40% { opacity: 1; transform: scale(1.08) translateY(-12px); }
          70% { opacity: 1; transform: scale(1.04) translateY(-8px); }
          100% { opacity: 1; transform: scale(1.04) translateY(-8px); }
        }
        .info-img {
          width: 64px;
          height: 64px;
          margin-bottom: 18px;
          filter: drop-shadow(0 2px 8px #00bfff88);
        }
        .info-card h2 {
          font-size: 1.3em;
          font-weight: 700;
          color: #00bfff;
          margin-bottom: 10px;
        }
        .info-card p {
          font-size: 1em;
          color: #222;
          margin-bottom: 0;
        }
        @media (max-width: 900px) {
          .info-containers { flex-direction: column; align-items: center; gap: 24px; }
        }
        @media (max-width: 600px) {
          .glass-card { padding: 24px 8px; }
          .landing-title { font-size: 2em; }
          .info-containers { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="landing-bg">
        <div className="glass-card">
          <div className="landing-title">Welcome to Services: Your Gateway to Tech Excellence</div>
          <div className="landing-desc">
            <b>Why Services?</b><br />
            Services is designed to empower students, professionals, and tech enthusiasts by providing a one-stop platform for coding assignments, project resources, and real-world learning. <br /><br />
            <b>Key Features:</b><br />
            <ul style={{textAlign:'left', margin:'0 auto', maxWidth:'400px'}}>
              <li><b>Comprehensive Assignments:</b> Practice and master skills in AI, ML, Web Development, Cloud, and more.</li>
              <li><b>Expert Guidance:</b> Access curated documentation, tutorials, and support from industry experts.</li>
              <li><b>Career Growth:</b> Explore career paths, internships, and exclusive opportunities.</li>
              <li><b>Community Driven:</b> Connect, collaborate, and grow with a vibrant tech community.</li>
              <li><b>Secure & Modern:</b> Seamless login, privacy-first design, and advanced UI/UX.</li>
            </ul>
            <br />
            <b>Unlock your potential, build your portfolio, and stay ahead in the tech world with Services!</b>
          </div>
          <button className="cta-btn" onClick={() => window.location.href='/login'}>
            Enter Website
          </button>
        </div>
        {/* Animated Info Containers */}
        <div className="info-containers">
          <div className="info-card animate__animated animate__fadeInLeft">
            <img src={aiImg} alt="AI" className="info-img" />
            <h2>AI & ML Integration</h2>
            <p>Experience hands-on learning with real-world AI/ML projects, boosting your skills for future tech careers.</p>
          </div>
          <div className="info-card animate__animated animate__fadeInUp">
            <img src={codeImg} alt="Code" className="info-img" />
            <h2>Code Collaboration</h2>
            <p>Collaborate on assignments, share solutions, and learn from a global community of coders and mentors.</p>
          </div>
          <div className="info-card animate__animated animate__fadeInRight">
            <img src={trendImg} alt="Trends" className="info-img" />
            <h2>Stay Ahead of Trends</h2>
            <p>Get updates on the latest technologies, frameworks, and industry best practices to stay competitive.</p>
          </div>
          <div className="info-card animate__animated animate__zoomIn">
            <img src={portfolioImg} alt="Portfolio" className="info-img" />
            <h2>Build Your Portfolio</h2>
            <p>Showcase your completed assignments and projects to potential employers and academic institutions.</p>
          </div>
          <div className="info-card animate__animated animate__fadeIn">
            <img src={userImg} alt="User" className="info-img" />
            <h2>Personalized Experience</h2>
            <p>Enjoy a tailored dashboard, progress tracking, and recommendations based on your interests and goals.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;