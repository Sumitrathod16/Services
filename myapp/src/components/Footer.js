import React from "react";
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
                height: 500px;
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
            .Footer ul li a:hover {
                text-decoration: underline;
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
            
            `}
        </style>
        <div className="Footer">

            <div className="footer-container1">
                <ul>
                    <h3>Developers</h3>
                    
                    <li>Documentation.</li>
                    <li>Tutorials.</li>
                    <li>Open Source Examples.</li>
                    <li>API Status</li>
                    <li>What's new?</li>
                </ul>
            </div>
            <div className="footer-container1">
                <ul>
                    <h3>Company</h3>
                    <li>Community</li>
                    <li>Forums</li>
                    <li>Discord</li>
                    <li>Stack Overflow</li>
                    
                </ul>
             </div>
            <div className="footer-container1">
            <ul>
                <h3>Social</h3>
                 <li>Twitter</li> 
                 <li>Instagram</li>
                 <li>Github</li>   
            </ul>    
            </div>   
            <div className="Box1">
                <h3>Contact Us</h3>
             </div>
             <div className="Box1">
                <h3>shopifyuS@gmail.com</h3>
             </div>
             </div>
        </>
    );
}
export default Footer;