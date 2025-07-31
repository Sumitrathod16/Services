import React from 'react';
function Explore(){
return(
    <>
    <style>
        {`
body {
            margin: 0;
            font-family: 'Inter', sans-serif;
            background-color: var(--color-gray-50);
            color: var(--color-gray-800);
        }

        /* --- Main Container & Header --- */
        .container {
            max-width: 72rem; /* 1152px */
            margin-left: auto;
            margin-right: auto;
            padding: 2rem 1rem; /* 32px 16px */
        }

        .header-text {
            text-align: center;
            margin-bottom: 3rem; /* 48px */
        }

        .header-text h1 {
            font-size: 2.25rem; /* 36px */
            font-weight: 800;
            color: var(--color-gray-800);
            margin-bottom: 0.5rem; /* 8px */
        }

        .header-text p {
            color: var(--color-gray-500);
            margin: 0;
        }

        /* --- Card Grid Layout --- */
        .card-grid {
            display: grid;
            gap: 2rem; /* 32px */
            grid-template-columns: 1fr; /* Default to 1 column on small screens */
        }

        /* Responsive grid columns for 3x3 layout */
        @media (min-width: 768px) { /* md */
            .card-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        /* --- Individual Card Styling --- */
        .card {
            position: relative;
            background-color: var(--color-white);
            padding: 1.5rem; /* 24px */
            border-radius: 0.75rem; /* 12px */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease-in-out;
            overflow: hidden;
            height: 14rem; /* 224px */
            display: flex;
            flex-direction: column;
        }

        .card:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        }

        /* Decorative background circle */
        .card-bg {
            position: absolute;
            top: -3rem; /* -48px */
            right: -3rem; /* -48px */
            width: 12rem; /* 192px */
            height: 12rem; /* 192px */
            border-radius: 9999px; /* full circle */
            opacity: 0.5;
        }

        /* Background color variations */
        .bg-red { background-color: var(--color-red-100); }
        .bg-orange { background-color: var(--color-orange-100); }
        .bg-yellow { background-color: var(--color-yellow-100); }
        .bg-indigo { background-color: var(--color-indigo-100); }
        .bg-blue { background-color: var(--color-blue-100); }
        .bg-gray { background-color: var(--color-gray-100); }
        .bg-teal { background-color: var(--color-teal-100); }
        .bg-purple { background-color: var(--color-purple-100); }
        .bg-pink { background-color: var(--color-pink-100); }

        /* Card Content Wrapper */
        .card-content {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .card-title {
            font-size: 1.5rem; /* 24px */
            font-weight: 700;
            color: var(--color-gray-800);
            margin: 0 0 0.75rem 0; /* 12px */
        }

        .card-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem; /* 8px */
            margin-bottom: 1rem; /* 16px */
        }

        .card-tags .tag {
            font-size: 0.75rem; /* 12px */
            font-weight: 500;
            color: var(--color-gray-600);
            background-color: var(--color-white);
            border: 1px solid var(--color-gray-300);
            border-radius: 9999px;
            padding: 0.25rem 0.75rem; /* 4px 12px */
        }

        /* Explore Link */
        .card-explore-link {
            margin-top: auto; /* Pushes to the bottom */
            display: flex;
            align-items: center;
            color: var(--color-gray-700);
            font-weight: 600;
            text-decoration: none;
        }
        
        .card-explore-link .arrow-icon {
            margin-left: 0.5rem; /* 8px */
            width: 1.25rem; /* 20px */
            height: 1.25rem; /* 20px */
            transition: transform 0.3s ease-in-out;
        }

        .card-explore-link:hover .arrow-icon {
            transform: translateX(0.25rem); /* 4px */
        }

        /* Icon on the right */
        .card-icon {
            position: absolute;
            top: 50%;
            right: 1.5rem; /* 24px */
            transform: translateY(-50%);
            z-index: 10;
        }

    `}
    </style>


    <div class="container">

        <div class="header-text">
            <h1>Explore Our Categories</h1>
            <p>PW is preparing students for 35+ exam categories. Scroll down to find the one you are preparing for</p>
        </div>
        

        <div class="card-grid">
        
            <div class="card">
                <div class="card-bg bg-red"></div>
                <div class="card-content">
                    <h3 class="card-title">NEET</h3>
                    <div class="card-tags"><span class="tag">class 11</span><span class="tag">class 12</span><span class="tag">Dropper</span></div>
                    <a href="#" class="card-explore-link">Explore Category<svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                </div>
                <div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 5.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="8" /><line x1="4.93" y1="4.93" x2="9.17" y2="9.17" /><line x1="2" y1="12" x2="8" y2="12" /><line x1="4.93" y1="19.07" x2="9.17" y2="14.83" /><line x1="12" y1="22" x2="12" y2="16" /><line x1="19.07" y1="19.07" x2="14.83" y2="14.83" /><line x1="22" y1="12" x2="16" y2="12" /><line x1="19.07" y1="4.93" x2="14.83" y2="9.17" /><circle cx="12" cy="12" r="2" fill="#fde047"/></svg></div>
            </div>

        
            <div class="card">
                <div class="card-bg bg-orange"></div>
                <div class="card-content">
                    <h3 class="card-title">IIT JEE</h3>
                    <div class="card-tags"><span class="tag">class 11</span><span class="tag">class 12</span><span class="tag">Dropper</span></div>
                    <a href="#" class="card-explore-link">Explore Category<svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                </div>
                <div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><circle cx="12" cy="12" r="1.5" fill="#60a5fa" /></svg></div>
            </div>


            <div class="card">
                <div class="card-bg bg-yellow"></div>
                <div class="card-content">
                    <h3 class="card-title">School Prep</h3>
                    <div class="card-tags"><span class="tag">class 6</span><span class="tag">class 7</span><span class="tag">class 8</span><span class="tag">More +</span></div>
                    <a href="#" class="card-explore-link">Explore Category<svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                </div>
                <div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eab308" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8z" fill="#fcd34d"></path><path d="M12 2a4 4 0 0 1 4 4v4H8V6a4 4 0 0 1 4-4z" fill="#fb923c"></path><path d="M8 2v2"></path><path d="M16 2v2"></path></svg></div>
            </div>
            <div class="card">
                <div class="card-bg bg-indigo"></div>
                <div class="card-content">
                    <h3 class="card-title">UPSC</h3>
                    <div class="card-tags"></div>
                    <a href="#" class="card-explore-link">Explore Category<svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                </div>
                <div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="#c7d2fe"></path><circle cx="9" cy="7" r="4" fill="#a5b4fc"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
            </div>

            
            <div class="card">
                <div class="card-bg bg-blue"></div>
                <div class="card-content">
                    <h3 class="card-title">Govt Jobs</h3>
                    <div class="card-tags"><span class="tag">SSC</span><span class="tag">Banking</span><span class="tag">Teaching</span></div>
                    <a href="#" class="card-explore-link">Explore Category<svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                </div>
                <div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22v-13h18v13" fill="#93c5fd"></path><path d="m3 9 9-7 9 7" fill="#60a5fa"></path><path d="M5 22v-8h14v8"></path><path d="M9 22v-5h6v5"></path></svg></div>
            </div>

            
            <div class="card">
                <div class="card-bg bg-gray"></div>
                <div class="card-content">
                    <h3 class="card-title">Defence</h3>
                    <div class="card-tags"><span class="tag">NDA</span><span class="tag">CDS</span><span class="tag">AFCAT</span><span class="tag">Agniveer</span></div>
                    <a href="#" class="card-explore-link">Explore Category<svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                </div>
                <div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#e5e7eb"></path><path d="M12 2l1.54 3.13L16.5 6l-2.5 2.44.59 3.44L12 10.5l-2.59 1.37.59-3.44L7.5 6l2.96-.5L12 2z" fill="#9ca3af"></path></svg></div>
            </div>

            
            <div class="card">
                <div class="card-bg bg-teal"></div>
                <div class="card-content">
                    <h3 class="card-title">Photography</h3>
                    <div class="card-tags"><span class="tag">Portrait</span><span class="tag">Landscape</span><span class="tag">Street</span></div>
                    <a href="#" class="card-explore-link">Explore Category<svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                </div>
                <div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" stroke-width="1"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" fill="#99f6e4"></path><circle cx="12" cy="13" r="4" fill="#5eead4"></circle></svg></div>
            </div>

            
            <div class="card">
                <div class="card-bg bg-purple"></div>
                <div class="card-content">
                    <h3 class="card-title">Music</h3>
                    <div class="card-tags"><span class="tag">DAW</span><span class="tag">Mixing</span><span class="tag">Mastering</span></div>
                    <a href="#" class="card-explore-link">Explore Category<svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                </div>
                <div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="1"><path d="M9 18V5l12-2v13" fill="#e9d5ff"></path><circle cx="6" cy="18" r="3" fill="#d8b4fe"></circle><circle cx="18" cy="16" r="3" fill="#d8b4fe"></circle></svg></div>
            </div>
<div class="card">
                <div class="card-bg bg-pink"></div>
                <div class="card-content">
                    <h3 class="card-title">Writing</h3>
                    <div class="card-tags"><span class="tag">Fiction</span><span class="tag">Poetry</span><span class="tag">Screenwriting</span></div>
                    <a href="#" class="card-explore-link">Explore Category<svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                </div>
                <div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="1"><path d="M12 20h9" fill="none"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" fill="#fbcfe8"></path></svg></div>
            </div>

        </div>
    </div>
    </>
);
}
export default Explore;