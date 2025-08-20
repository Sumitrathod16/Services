import React from 'react';

const Affiliates = () => {
    return (
        <>
        <style>
            {`
           body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f7f9fc;
    color: #333;
}

.affiliates-container {
    max-width: 950px;
    margin: 50px auto;
    padding: 40px;
    background-color: #fff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
}

.affiliates-header {
    text-align: center;
    border-bottom: 3px solid #e9ecef;
    padding-bottom: 30px;
    margin-bottom: 40px;
}

.affiliates-header h1 {
    color: #2c3e50;
    font-size: 3em;
    margin-bottom: 10px;
}

.affiliates-header p {
    color: #7f8c8d;
    font-size: 1.2em;
}

.affiliates-content h2 {
    color: #34495e;
    font-size: 2em;
    margin-top: 50px;
    margin-bottom: 20px;
}

.affiliates-content p {
    font-size: 1.1em;
    text-align: justify;
}

.affiliates-content ol {
    margin-top: 20px;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 30px;
}

.feature-item {
    background-color: #f8f9fa;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.feature-item h3 {
    color: #007bff;
    font-size: 1.4em;
    margin-bottom: 10px;
}

.signup-button {
    display: inline-block;
    background-color: #007bff;
    color: #fff;
    padding: 15px 30px;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    font-size: 1.1em;
    transition: background-color 0.3s ease;
}

.signup-button:hover {
    background-color: #0056b3;
}

.affiliates-footer {
    text-align: center;
    margin-top: 50px;
    padding-top: 30px;
    border-top: 2px solid #e9ecef;
    color: #7f8c8d;
    font-size: 0.9em;
}
           `}
        </style>
        <div className="affiliates-container">
            <header className="affiliates-header">
                <h1>Our Affiliate Program</h1>
                <p>Partner with us and earn commissions!</p>
            </header>
            <main className="affiliates-content">
                <section>
                    <h2>1. How It Works</h2>
                    <p>
                        Our affiliate program is simple and rewarding. You earn a commission for every sale made through your unique referral link.
                    </p>
                    <ol>
                        <li>**Sign Up:** Fill out our quick application form.</li>
                        <li>**Promote:** Share your unique affiliate link with your audience on your blog, social media, or email list.</li>
                        <li>**Earn:** Receive a commission on every successful sale.</li>
                    </ol>
                </section>
                <section>
                    <h2>2. Why Join Us?</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <h3>Generous Commissions</h3>
                            <p>We offer a competitive commission rate on all qualifying purchases.</p>
                        </div>
                        <div className="feature-item">
                            <h3>High-Quality Products</h3>
                            <p>Promote products that your audience will love and trust.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Dedicated Support</h3>
                            <p>Our affiliate manager is here to help you succeed.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Real-Time Tracking</h3>
                            <p>Monitor your clicks, sales, and commissions with our easy-to-use dashboard.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>3. Ready to Get Started?</h2>
                    <p>
                        Join our growing community of affiliates today and start earning. It's free to join, and the process is simple!
                    </p>
                    <a href="/signup" className="signup-button">
                        Join Now
                    </a>
                </section>
            </main>
            <footer className="affiliates-footer">
                <p>For questions, please contact us at affiliates@yourcompany.com</p>
            </footer>
        </div>
        </>
    );
};

export default Affiliates;