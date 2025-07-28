import React from 'react';
function Inner(){
    return(
        <>
        <style>
            {`
                .Inner{
                width:100%;
                height:100%;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                margin:20px;
                }
                .Inner-box {
                  font-size: 0.8em;
                    color: white;
                    font-weight:bold;
                    text-align: center;
                    padding:6px 16px;
                    background-color: #333;
                    border-radius: 5px;
                    box-shadow: 0 2px 2px rgba(0, 0,
                        0, 0.2);
                        max-width: 300px;
                        margin: 0 auto;
                }
                        .Inner-header{
                        font-size:4em;
                        color=#333;
                        text-align:center;
                        }
                        .Inner-descr{
                        font-size:1em;
                        color:gray;
                        text-align:center;
                        }
            `}
        </style>
        <div className="Inner">
            
                <p className="Inner-box">Designed for real-world applications</p>
                <h1 className="Inner-header">Complete Set Of Ready to use inner pages</h1>
            
                    <h4 className="Inner-descr">Includes all inner pages such as About,Service and Contact,carefully designed to suit your site</h4>
                </div>
            
        
</>
    );
}
export default Inner;