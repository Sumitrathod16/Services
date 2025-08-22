import React from 'react';

const Cookie = () => {
    return (
        <>
        <style>
            {`
            body {
    font-family: 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f0f2f5;
    color: #444;
}

.cookie-policy-container {
    max-width: 850px;
    margin: 50px auto;
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
}

.cookie-policy-header {
    text-align: center;
    border-bottom: 2px solid #e9ecef;
    padding-bottom: 25px;
    margin-bottom: 30px;
}

.cookie-policy-header h1 {
    color: #007bff;
    font-size: 2.5em;
    margin-bottom: 5px;
}

.cookie-policy-header p {
    color: #6c757d;
    font-size: 0.95em;
    font-style: italic;
}

.cookie-policy-content h2 {
    color: #343a40;
    font-size: 1.8em;
    margin-top: 40px;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 8px;
}

.cookie-policy-content p {
    margin-bottom: 20px;
    text-align: justify;
}

.cookie-policy-content ul {
    margin-top: 15px;
    padding-left: 20px;
}

.cookie-policy-content li {
    margin-bottom: 10px;
}

.cookie-policy-content a {
    color: #007bff;
    text-decoration: underline;
}

.cookie-policy-footer {
    text-align: center;
    margin-top: 50px;
    padding-top: 25px;
    border-top: 2px solid #e9ecef;
    color: #6c757d;
    font-size: 0.9em;
}
            `}
        </style>
        <div className="cookie-policy-container">
            <header className="cookie-policy-header">
                <h1>Cookie Policy</h1>
                <p>Last updated: August 20, 2025</p>
            </header>
            <main className="cookie-policy-content">
                <section>
                    <h2>1. What are Cookies?</h2>
                    <p>
                        Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work or work more efficiently, as well as to provide information to the owners of the site.
                    </p>
                </section>
                <section>
                    <h2>2. How We Use Cookies</h2>
                    <p>
                        We use cookies for several purposes, including:
                    </p>
                    <ul>
                        <li>**Necessary Cookies:** These are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these.</li>
                        <li>**Performance Cookies:** These cookies collect information about how you use our website (e.g., which pages you visit most often) to help us improve its performance and design.</li>
                        <li>**Functionality Cookies:** These allow the website to remember choices you make (such as your username or language) and provide enhanced, more personal features.</li>
                        <li>**Marketing Cookies:** These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.</li>
                    </ul>
                </section>
                <section>
                    <h2>3. Your Choices Regarding Cookies</h2>
                    <p>
                        You can manage your cookie preferences through our cookie consent tool or by adjusting your browser settings. Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience since it will no longer be personalized to you.
                    </p>
                </section>
                <section>
                    <h2>4. More Information</h2>
                    <p>
                        For more details about how we handle your personal data, please read our <a href="/privacy-policy">Privacy Policy</a>.
                    </p>
                </section>
            </main>
            <footer className="cookie-policy-footer">
                <p>&copy; {new Date().getFullYear()} Quicky. All rights reserved.</p>
            </footer>
        </div>
        </>
    );
};

export default Cookie;