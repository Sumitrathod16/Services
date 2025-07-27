import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main'; 
import Login from './components/Login';
import Features from './components/Features';
import Documentation from './components/Documentation';
import Support from './components/Support';
import Specialization from './components/Specialization';
import Exclusive from './components/Exclusive';
function App() {
  return (
    <Router>
     <Navbar />
      <Main/>
      <Specialization/>
      <Exclusive/>
      <Routes>
        
        <Route path="/features" element={<Features />} />
        <Route path="/Documentation" element={<Documentation />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        
        </Routes>
        
    </Router>
    
      
  );
}
export default App;
