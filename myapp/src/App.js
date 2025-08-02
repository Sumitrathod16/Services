import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; 
import Login from './components/Login';
import Documentation from './components/Documentation';
import Support from './components/Support';
import Home from './components/Home';
import Features from './components/Features';
import Signin from './components/Sign-in'; // Assuming you have a Signin component
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
        
        </Routes>
        
    </Router>
    
      
  );
}
export default App;
