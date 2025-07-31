import React from "react";
import { Link } from 'react-router-dom';
function Footer()
{
    return (
        <>
        <style>
            {`
            .Footer{
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;  
                padding: 20px;
                background-color: #333;
                color: white;
                height: 350px;
                width: 100%;
                background-color:black;
                margin-bottom:50px;

            }
                .footer-row{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;    
                    margin-bottom: 20px;
                }
            .Footer ul {
                list-style: none;   
                padding: 0;
                margin: 0;
            }
            .Footer ul li {
                margin: 10px 0;
            }   
            .Footer ul li a {
                color: white;   
                text-decoration: none;
            }
                /*-----Need to pay attention to this part-----*/
            .footer-container1 ul {
                text-decoration: none;
                color: white;
            }   
            .footer-container1 {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: flex-start;
                margin-top: 30px;   
                padding: 20px;
            }       
  .Box1{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                padding: 20px;
                background-color: black;
                border:2px solid white;
                color: white;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                width: 200px;   
                height: 100px;

                }
        .Box1 h3 {
                font-size: 1rem;       
                color: white;
                text-align: center;
                margin: 0;
                padding: 10px;
                }
            
            .footer    
            `}
        </style>
        <div className="Footer">

            <div className="footer-container1">
                <ul>
                    <h3>Company.</h3>
                    <li><Link to="/AboutUs">About</Link></li>
                    <li><Link to="/Careers">Careers</Link></li>
                    <li><Link to="/Press">Press</Link></li>
                    <li><Link to="/Affilates">Affilates</Link></li>
                </ul>
            </div>
            <div className="footer-container1">
                <ul>
                    <h3>Resources</h3>
                    <li><Link to="/Blog">Blog</Link></li>
                    <li><Link to="/StudyGuide">Study Guide</Link></li>      
                    <li><Link to="/PracticeSet">Practice set</Link></li>
                    <li><Link to="/Subjects">Subjects</Link></li>
                </ul>
             </div>
            <div className="footer-container1">
            <ul>
                <h3>Supports</h3>
                 <li>FAQ</li> 
                 <li>Community</li>   
            </ul>    
            </div>   
            <div className="footer-container1">
                <ul>
                    <h3>Legal</h3>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
            <div className="Box1">
                <h3>Contact Us</h3>
             </div>
             <div className="Box1">
                <h3>shopifyus@gmail.com</h3>
             </div>
             </div>
        </>
    );
}
export default Footer;