import React from "react";
import Seo from "../assets/seo.svg";
import Code from "../assets/code.svg";
import bootstrap from "../assets/bootstrap.svg";
function Exclusive() {
    return (
        <>
        <style>
            {`
            .exclusive-container {
              /*To add background image, uncomment the line below and provide a valid image URL*/
                background-image: url("../assets/exclusive-bg.jpg");
                background-size: cover;
                justify-content: space-around;
                padding: 50px 20px;
                background-color: #f4f4f4;
                text-align: center;

            }
                .exclusive-title {
                   font-size: 0.8em;
                    color: white;
                    text-align: center;
                    padding:6px 16px;
                    background-color: #333;
                    border-radius: 5px;
                    box-shadow: 0 2px 2px rgba(0, 0,0, 0.2);
                    max-width: 300px;
                    margin: 0 auto;
                }
                .Containers {
                display: flex;
                flex-direction: row;
                gap: 80px;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                }
                .Containers h1 {
                display: flex;
                justify-content: center;
                text-align: center;
                font-size: 0.5em;
                color: #333;
                
                }
            .exclusive-container h5 {
                font-size: 0.7em;
                color: white;
                margin-bottom: 10px;
                }
                .tech-logo {
                display:flex;
                justify-content: center;
                width: 50px;
                height: 50px;
                margin-bottom: 100px;
                }
                .container1, .container2, .container3{
                    height:350px;
                    width:250px;
                    background-color: #ccc;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    justify-content: center;
                    margin: 25px;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 8px rgba(0, 0,0,0.2);
                    transition: transform 0.3s ease;
                    border:2px solid rgba(0,0,0,0.2);
                  }
                .container1 p,.container2 p,.container3 p {
                       font-size: 1rem;
                       align-items: center;
                       text-align: center;
                    
                       margin:20px;
                             }
                .container1 h1, .container2 h1,.container3 h1 {
                    font-size: 1em;   
                    color: black;                     
                    text-align: center; 
                } 
                    .container1:hover, .container2:hover, .container3:hover {
                                transform: translateY(-10px);
                                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                                background-color: #e0e0e0;
                                cursor: pointer;
                            }
                    .tech-logo {
                                transition: transform 0.3s, filter 0.3s;
                                }
                    .tech-logo:hover {
                                    transform: scale(1.1);
                                     filter: drop-shadow(0 0 8px #007bff);
                                    
                                     }
                      
                    }             
                    `}
                
            
                    </style>
    
        <div className="exclusive-container">
   <h5 className="exclusive-title">What makes this website standout</h5>
            <h1>Expertly Crafted with Exclusive features</h1>
            </div>
            <div className="Containers">
            <div className="container1">

                <img src={Seo} alt="SEO" className="tech-logo" />
                <h1>Bootstrap 5.x framework</h1>
                <p>Build it on the latest bootstrap version for responsive,mobile-first and consistent design.</p>
                

            </div>
            <div className="container2">
                <img src={Code} alt="Code" className="tech-logo" />
                <h1> Crafted Code Excellence</h1>
                <p>Clean,well-organized and developer-friendly code that's easy to customize and scale</p>                
            </div>
        <div className="container3">
                <img src={bootstrap} alt="Bootstrap" className="tech-logo" />
                <h1>SEO-Friendly Markup</h1>
                <p>Semantic HTML structure ensures better indexing,faster load time and top SEO performance</p>
            </div>
            </div>
            
                
        </>
    );
}
export default Exclusive;