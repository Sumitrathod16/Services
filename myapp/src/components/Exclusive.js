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
                    box-shadow: 0 2px 2px rgba(0, 0,
                        0, 0.2);
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
                height:300px;
                width:200px;
                background-color: #ccc;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 20px;
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
                <h1>SEO friendly makeup</h1>
                

            </div>
            <div className="container2">
                <img src={Code} alt="Code" className="tech-logo" />
                <h1> Crafted Code Excellence</h1>
                
       </div>
        <div className="container3">
                <img src={bootstrap} alt="Bootstrap" className="tech-logo" />
                <h1>Bootstrap 5X framework</h1>
            </div>
            </div>
            
                
        </>
    );
}
export default Exclusive;