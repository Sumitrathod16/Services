import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; 
import Login from './components/Login';
import Documentation from './components/Documentation';
import Support from './components/Support';
import Home from './components/Home';
import Features from './components/Features';
function App() {
  return (
    <Router>
     <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Documentation" element={<Documentation />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Press" element={<Press />} />
        <Route path="/Affilates" element={<Affilates />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/StudyGuide" element={<StudyGuide />} />
        <Route path="/PracticeSet" element={<PracticeSet />} />
        <Route path="/Subjects" element={<Subjects />} />
        
        </Routes>
        
    </Router>
    
      
  );
}
export default App;
