import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Explorepage from './components/ExplorePage'; 
import Login from './components/Login';
import Documentation from './components/Documentation';
import Support from './components/Support';
import Home from './components/Home';
import Features from './components/Features';
import Signin from './components/Sign-up';
import Footer from './components/Footer';
import About from './components/About'; // Importing the About component
import Careers from './Careers'; // Importing the Careers component
import Press from './Press'; // Importing the Press component  
import Affiliates from './components/Affiliates';
import Blog from './Blog';
import Study from './Study'; // Importing the Study component
import Practice from './Practice';// Importing the Practice component
import Privacy from './Privacy';
import Terms from './Terms';
import Cookie from './Cookie';
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
import C from './components/C';
import Cpp from './components/C++';
import Php from './components/Php';
import Dbms from './components/Dbms';
import Sql from './components/Sql';
import FAQ from './components/FAQ';
import Mlassign from './components/Mlassign';
import Dlassign from './components/Dlassign'; 
import Aiassign from './components/Aiassign';
import Flutterassign from './components/Flutterassign';
import Pyassign from './components/Pyassign';
import Djassign from './components/Djassign';
import Flaskassign from './components/Flaskassign';
import Javaassign from './components/Javaassign';
import Springassign from './components/Springassign';
import Hiberassign from './components/Hiberassign';
import Htmlassign from './components/Htmlassign';
import Cssassign from './components/Cssassign';
import Jsassign from './components/Jsassign';
import Nodeassign from './components/Nodeassign';
import Reactassign from './components/Reactassign';
import Mongodbassign from './components/Mongodbassign';
import Awsassign from './components/Awsassign';
import Azureassign from './components/Azureassign';
import Gcpassign from './components/Gcpassign';
import Cassign from './components/Cassign';
import Cppassign from './components/Cppassign';
import Phpassign from './components/Phpassign';
import Dbmsassign from './components/Dbmsassign';
import Sqlassign from './components/Sqlassign.';
import LandingPage from './components/Landing';

function App() {
  return (
    


    <Router>
      <Routes>
<Route path="/" element={<LandingPage />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signin />} />
  {/* All other routes with Navbar and Footer */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
        <Route path="/Documentation" element={<Documentation />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Explorepage" element={<Explorepage />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/About" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/Affiliates" element={<Affiliates/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/Study" element={<Study/>} />
        <Route path="/Practice" element={<Practice/>} />
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/Terms" element={<Terms/>}/>
        <Route path="/Cookie" element={<Cookie/>}/>
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
        <Route path="/C" element={<C/>}/>
        <Route path="/C++" element={<Cpp/>}/>
        <Route path="/Php" element={<Php/>}/>
        <Route path="/Dbms" element={<Dbms/>}/>
        <Route path="/Sql" element={<Sql/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        <Route path="/Mlassign" element={<Mlassign/>}/>
        <Route path="/Dlassign" element={<Dlassign/>}/>
        <Route path="/Aiassign" element={<Aiassign/>}/>
        <Route path="/Flutterassign" element={<Flutterassign/>}/>
        <Route path="/Pyassign" element={<Pyassign/>}/>
        <Route path="/Djassign" element={<Djassign/>}/>
        <Route path="/flaskassign " element={<Flaskassign/>}/>
        <Route path="/Javaassign" element={<Javaassign/>}/>
        <Route path="/Springassign" element={<Springassign/>}/>
        <Route path="/Hiberassign" element={<Hiberassign/>}/>
        <Route path="/Htmlassign" element={<Htmlassign/>}/>
        <Route path="/Cssassign" element={<Cssassign/>}/>
        <Route path="/Jsassign" element={<Jsassign/>}/>
        <Route path="/Nodeassign" element={<Nodeassign/>}/>
        <Route path="/Reactassign" element={<Reactassign/>}/>
        <Route path="/Mongodbassign" element={<Mongodbassign/>}/>
        <Route path="/Awsassign" element={<Awsassign/>}/>
        <Route path="/Azureassign" element={<Azureassign/>}/>
        <Route path="/Gcpassign" element={<Gcpassign/>}/>
        <Route path="/Cassign" element={<Cassign/>}/>
        <Route path="/Cppassign" element={<Cppassign/>}/>
        <Route path="/Phpassign" element={<Phpassign/>}/>
        <Route path="/Dbmsassign" element={<Dbmsassign/>}/>
        <Route path="/Sqlassign" element={<Sqlassign/>}/>
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
    
    
      
  );
  
}
export default App;
