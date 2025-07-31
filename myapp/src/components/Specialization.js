import React from "react";
import truckLogo from "../assets/truck.svg";
import bookLogo from "../assets/book.svg";
import authorLogo from "../assets/author.svg";
import trendesetterLogo from "../assets/trendesetter.svg";
function Specialization() {
    return (
        <>
        <style> 
            {`
            .specialization-container { 
                padding: 50px 20px;
                background-color: #f4f4f4;
                text-align: center;
                }
            .specialization-title {
                font-size: 2.5em;   
                color: #333;
                margin-bottom: 20px;
                }
            .specialization-desc {  
                font-size: 1.2em;
                color: #666;
                margin-bottom: 30px;
                }
            .specialization-list {
                display: flex;
                flex-direction: row;
                gap:300px;
                align-items: center;
                max-width: 600px;
                justify-content: space-evenly;
                list-style-type: none;
                padding: 0;
                margin-left:150px;
                }
            .specialization-list li {
                font-size: 1.1em;
                color: #444;
                margin: 10px 0;
                }
            .logo {
             
                width: 50px;
                height: 50px;
                margin-left: 30px;
                margin-right: 10px;
                vertical-align: middle;
                }
            .logo:hover {
                transform: scale(1.1);
                transition: transform 0.3s;
                }
            
            

            `}
        </style>
        <div className="specialization-container">
            <h1 className="specialization-title">Specialization</h1>
            <p className="specialization-desc">Discover our specialized services tailored to your needs.</p>
            <ul className="specialization-list">
                <li><img src={bookLogo} className="logo" alt="Book Logo"/>Made by elite authors</li>
                <li><img src={truckLogo} className="logo" alt="Truck Logo"/> Weekly best seller</li>
                <li><img src={authorLogo} className="logo" alt="Author logo"/> Exclusive Author</li>
                <li><img src={trendesetterLogo} className="logo" alt="Trendsetter Logo"/> Trendsetter playlists</li>
            </ul>
        </div>
        </>
    );
}
export default Specialization;