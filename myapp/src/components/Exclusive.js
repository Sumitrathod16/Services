import React from "react";
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
                .Containers {
                display: flex;
                flex-direction: row;
                gap: 80px;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                }
            .exclusive-container h1 {
                font-size: 2.5em;
                color: #333;
                margin-bottom: 20px;
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
            <h1>Expertly Creafted with Exclusive features</h1>
            </div>
            <div className="Containers">
            <div className="container1">

            </div>
            <div className="container2">
                
       </div>
        <div className="container3">
            </div>
            </div>
            
                
        </>
    );
}
export default Exclusive;