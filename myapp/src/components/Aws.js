import React, { useState } from 'react';

const syllabusData = [
  {
    id: 1,
    title: 'AWS Fundamentals',
    description: 'Fundamental concepts of  learning and its applications',
    details: 'This section covers the foundations of deep learning, including definitions, types, and how it’s used in modern applications.',
    icon: '🧠',
    chapters: [
    "What is AWS? Why use it?",
    "Cloud Computing Models:",
    "IaaS, PaaS, SaaS",   
    "Cloud Deployment Models:",
    "Public, Private, Hybrid, Multi-cloud",
    "AWS Global Infrastructure:",
    "Regions, Availability Zones, Edge Locations",
    "AWS Free Tier Overview",
    "Understanding IAM (Identity and Access Management):",
    "Users, Groups, Roles, Policies",
    "AWS CLI and AWS SDK Basics",
    "AWS Console Navigation",
    "Setting up a Free AWS Account securely"  
    ]
  },
  {
    id: 2,
    title: ' Compute, Storage & Networking',
    description: 'Understanding the architecture and function of ANNs',
    details: 'Here, we dive into perceptrons, activation functions, and forward/backward propagation.',
    icon: '🔗',
    chapters: [
      "EC2 (Elastic Compute Cloud):",
      "Launching, connecting via SSH, AMIs",
      "Security Groups, Key Pairs",
      "EC2 Instance Types & Pricing Models (On-demand, Reserved, Spot)",
      "Auto Scaling and Load Balancing:",
      "Elastic Load Balancer (ELB)",
      "Auto Scaling Groups (ASG)",
      "S3 (Simple Storage Service)",
      "Buckets, Objects, ACLs, Policies",
      "Versioning, Lifecycle Policies",
      "Static Website Hosting on S3" ,
      "EBS (Elastic Block Store)",
      "EFS (Elastic File System)",
      "Glacier (for Archival Storage)",
      "VPC (Virtual Private Cloud)",
      "Subnets, Route Tables, Internet Gateways",
      "NAT Gateway, VPC Peering",
      "Security Groups vs NACLs",
      "Elastic IP, VPC Flow Logs",
      "Route 53 (DNS and Domai Management)"
    ]
  },
  {
    id: 3,
    title: ' Databases & Serverless',
    description: 'Exploring multi-layered neural networks and their power',
    details: 'This module explains how deep architectures differ and how to train them effectively.',
    icon: '🧱',
    chapters: [
   "RDS (Relational Database Service)",
    "MySQL, PostgreSQL, Aurora, etc.",
    "Backups, Multi-AZ, Read Replicas",
    "DynamoDB (NoSQL Key-Value Store)",
    "ElastiCache (Redis/Memcached)",
    "Amazon Redshift (Data Warehousing)",
    "Lambda Functions:",
    "Writing your first function",
    "Triggers (S3, API Gateway, EventBridge)",
    "Permissions and Execution Role",
    "API Gateway:",
    "Creating and managing REST APIs",
    "Lambda Proxy Integration",
    "Step Functions (Serverless Orchestration)",
    "EventBridge and CloudWatch Events  "
    ]
  },
  {
    id: 4,
    title: 'DevOps, Monitoring & Security',
    description: 'Latest advancements and future directions of the field',
    details: 'You’ll learn about transformers, foundation models, and cutting-edge applications.',
    icon: '📈',
    chapters: [
    "CloudFormation (Infrastructure as Code)",
    "AWS CDK or Terraform (optional advanced) ",
    "CodePipeline, CodeDeploy, CodeBuild (CI/CD)",
    "CloudWatch",
    "Logs, Alarms, Metrics, Dashboards",
    "CloudTrail (API call auditing)",
    "AWS Config (Compliance & Resource Tracking)",
    "Secrets Manager & Parameter Store",
    "IAM Best Practices:",
    "Principle of Least Privilege",
    "MFA (Multi-Factor Authentication)"  
    ]
  },
];

const Syllabus = () => {
  const [openId, setOpenId] = useState(null);

  const toggleInfo = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <style>
        {`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: #f3f4f6;
        }
        .main-container {
          display: flex;
          height: 100vh;
        }
        .sidebar {
          width: 220px;
          background-color: #1c1f2e;
          color: white;
          padding: 1rem;
        }
        .sidebar h2 {
          margin-bottom: 1rem;
        }
        .sidebar ul {
          list-style: none;
          padding: 0;
        }
        .sidebar li {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          margin-bottom: 0.5rem;
        }
        .sidebar li.active, .sidebar li:hover {
          background-color: #2c2f3e;
        }
        .content {
          flex: 1;
          background-color: white;
          padding: 2rem;
          overflow-y: auto;
        }
        .syllabus-card {
          display: flex;
          padding: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          margin-bottom: 1rem;
          background-color: #f9fafb;
          transition: background 0.2s;
        }
        .syllabus-card:hover {
          background-color: #f3f4f6;
        }
        .icon {
          font-size: 1.8rem;
          margin-right: 1rem;
          align-self: flex-start;
        }
        .info h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }
        .info p {
          margin: 0.4rem 0 0.6rem 0;
          font-size: 0.9rem;
          color: #4b5563;
        }
        .progress-bar {
          height: 6px;
          background-color: #d1d5db;
          border-radius: 3px;
          overflow: hidden;
          width: 100%;
          margin-top: 0.5rem;
        }
        .bar-fill {
          height: 100%;
          width: 60%;
          background-color: #4f46e5;
        }
        .clickable {
          cursor: pointer;
        }
        .extra-info {
          margin-top: 0.5rem;
          font-size: 0.85rem;
          color: #374151;
          background-color: #e5e7eb;
          padding: 0.8rem;
          border-radius: 8px;
        }
        .chapter-list {
          margin-top: 0.5rem;
          padding-left: 1.2rem;
        }
        .chapter-list li {
          margin-bottom: 0.3rem;
          color: #22223b;
        }
        `}
      </style>
      <div className="main-container">
        <aside className="sidebar">
          <h2>Syllabus</h2>
          <ul>
            <li className="active">Syllabus</li>
            <li>Modules</li>
            <li>Assignments</li>
            <li>Grades</li>
          </ul>
        </aside>

        <section className="content">
          {syllabusData.map((item) => (
            <div
              key={item.id}
              className="syllabus-card clickable"
              onClick={() => toggleInfo(item.id)}
            >
              <div className="icon">{item.icon}</div>
              <div className="info">
                <h3>{item.id}. {item.title}</h3>
                <p>{item.description}</p>
                {item.id === 1 && (
                  <div className="progress-bar">
                    <div className="bar-fill" />
                  </div>
                )}
                {openId === item.id && (
                  <div className="extra-info">
                    <p>{item.details}</p>
                    <ul className="chapter-list">
                      {item.chapters.map((chapter, idx) => (
                        <li key={idx}>{chapter}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Syllabus;