import React from "react";
function Features() {
    return (
        <>
            <style>
                {`
                .features-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 50px 20px;
                    background-color: #f9f9f9;
                }
                .features-title {
                    font-size: 2em;
                    color: #333;
                    margin-bottom: 20px;
                }
                .features-desc {
                    font-size: 1.2em;
                    color: #666;
                    text-align: center;
                    max-width: 600px;
                    margin-bottom: 30px;
                }
                .features-list {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    font-size: 1em;
                    color: #444;
                }
                .features-list li {
                    margin: 10px 0;
                }
                .features-footer {
                    width: 100%;
                    background: #181818;
                    color: #fff;
                    padding: 32px 0 16px 0;
                    border-top: 1px solid #333;
                    margin-top: 50px;
                    font-size: 0.95em;
                }
                .footer-content {
                    max-width: 900px;
                    margin: 0 auto;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: center;
                    gap: 16px;
                }
                .footer-links a {
                    color: #bbb;
                    text-decoration: none;
                    align-items:evenly;
                    transition: color 0.2s;

                }
                .footer-links a:last-child {
                    margin-right: 0;
                }
                .footer-links a:hover {
                    color: #fff;
                    text-decoration: underline;
                }
                .footer-copy {
                    color: #bbb;
                    font-size: 0.92em;
                }
                @media (max-width: 600px) {
                    .footer-content {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 8px;
                    }
                    .footer-links {
                        margin: 8px 0;
                    }
                }
                `}
            </style>
            <div className="features-container">
                <h1 className="features-title">Features</h1>
                <p className="features-desc">Explore the amazing features of our application.</p>
                <ul className="features-list">
                    <li>Feature 1: User-friendly interface</li>
                    <li>Feature 2: High performance</li>
                    <li>Feature 3: Secure and reliable</li>
                </ul>
            </div>
            <footer className="features-footer">
                <div className="footer-content">                         
        
                    <div className="footer-links">
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div className="footer-copy">
                        © {new Date().getFullYear()} MyApp. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Features;