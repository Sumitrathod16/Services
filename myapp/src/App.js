import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';

function App() {
  return (
    <Router>
     <Navbar />
      <Main/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        
        </Routes>
        
    </Router>
    
      
  );
}
export default App;
