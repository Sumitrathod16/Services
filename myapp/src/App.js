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
import Footer from './components/Footer';
import About from './components/About'; // Importing the About component
import Careers from './Careers'; // Importing the Careers component
import Press from './Press'; // Importing the Press component  
import Blog from './Blog';
import Study from './Study'; // Importing the Study component
import Practice from './Practice'; // Importing the Practice component
import Html from './components/Html';
import CSS from './components/Css';
import Javascript from './components/Javascript';
import Nodejs from './components/Node';
import Reactjs from './components/React';
import Mongodb from './components/Mongodb';
import Aws from './components/Aws';
import Azure from './components/Azure';
import Gcp from './components/Gcp';
import Flutter from './components/Flutter';
import Python from './components/Python';
import Django from './components/Django';
import Flask from './components/Flask';
import Java from './components/Java';
import Spring from './components/Spring';
import Hibernate from './components/Hibernate';
import ML from './components/Ml';
import Dl from './components/Dl';
import AI from './components/Ai';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
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
        <Route path="/signin" element={<Signin />} />
        <Route path="/About" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Study" element={<Study/>} />
        <Route path="/Practice" element={<Practice/>} />
        <Route path="/Html" element={<Html/>}/>
        <Route path="/Css" element={<CSS/>}/>
        <Route path="/Javascript" element={<Javascript/>}/>
        <Route path="/Nodejs" element={<Nodejs/>}/>
        <Route path="/Reactjs" element={<Reactjs/>}/>
        <Route path="/MongoDB" element={<Mongodb/>}/>
        <Route path="/Aws" element={<Aws/>}/>
        <Route path="/Azure" element={<Azure/>}/>
        <Route path="/Gcp" element={<Gcp/>}/>
        <Route path="/Flutter" element={<Flutter/>}/>
        <Route path="/Python" element={<Python/>}/>
        <Route path="/Django" element={<Django/>}/>
        <Route path="/Flask" element={<Flask/>}/>
        <Route path="/Java" element={<Java/>}/>
        <Route path="/Spring" element={<Spring/>}/>
        <Route path="/Hibernate" element={<Hibernate/>}/>
        <Route path="/Ml" element={<ML/>}/>
        <Route path="/Dl" element={<Dl/>}/>
        <Route path="/Ai" element={<AI/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        </Routes>
        <Footer/>
    </Router>
    
      
  );
}
export default App;
