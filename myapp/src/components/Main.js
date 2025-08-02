import React from "react";

import CSS from "../assets/css.svg";
import HTML from "../assets/html.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import SQL from "../assets/sql.svg";

function Main() {
    return (
        <>
            <style>{`
            .box-container {
                    display: flex;
                    justify-content: flex-start;
                    align-items:flex-start ;
                    margin:0 auto;
                }
                .box_title {    
                    font-size: 0.8em;
                    color: white;
                    text-align: center;
                    padding:6px 16px;
                    background-color: #333;
                    border-radius: 5px;
                    box-shadow: 0 2px 2px rgba(0, 0,
                        0, 0.2);
                        max-width: 300px;
                        margin: 0 auto;
                }
                .main-container {
                    padding: 100px 0 0 60px;
                    background-color: black;
                    min-height: 80vh;  
                }
                .main-content {
                    text-size: 1.8em;
                    max-width: 650px;
                    
                    text-align: left;
                }
                .main-title {
                   
                    font-size: 3em;
                    color: white;;
                }
                .main-desc {
                    font-size: 0.9em;
                    color: #666;
                }
                    .buttons {
                    display: flex;      
                    justify-content: flex-start;
                    align-items: center;
                    margin-top: 20px;
                }
                    .explore-button{
                    padding: 10px 20px;
                    background-color: red;
                    color: black;       
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1em;
                    margin-right: 10px;
                }
                .info-button {
                    padding: 10px 20px;
                    background-color: white;
                    color: black;       
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1em;
                }   
                .logo-container {
                            padding: 5px;
                            display: flex;
                            flex-direction: row;
                            gap: 10px;
                            max-width: 600px;
                            justify-content: space-evenly;
                            align-items: center;
                            margin-top: 20px;
                            margin-left: 0 auto;
                }
                    
                    .tech-logo {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s;
                }
                .tech-logo:hover {
                    transform: scale(1.1);
                }
                .tech-logo:active {
                    transform: scale(0.9);
                }
                .tech-logo:focus {
                    outline: none;
                    box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.5);
                }
                .

                
`}</style>
            <div className="main-container">
                <div className="main-content">
                    <div className="box_container">
                        <h1 className="box_title">Best way for learning</h1>
                        </div>
                    <h1 className="main-title">The better way to learn Web-development</h1>
                    <p className="main-desc">We provide you the roadmap of web-development and web-connections. The better way to learn.</p>
            
                </div>
                <div className="buttons">
                <button className="explore-button">Explore More</button>
                <button className="info-button">More Information</button>
</div>
<div className="logo-container">
                    
                    <img src={SQL} alt="SQL" className="tech-logo" />
                    <img src={CSS} alt="CSS" className="tech-logo" />
                    <img src={HTML} alt="JavaScript" className="tech-logo" />
                    <img src={js} alt="React" className="tech-logo" />
                    <img src={react} alt="SQL" className="tech-logo" /> 
                </div>
            </div>
        </>
    );
}
export default Main;