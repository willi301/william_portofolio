import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./components.css"; // optional if you have specific styles for the navbar
import SocialMedia from "./socialMedia";
import Resume from '../assets/William_Widjaja_Resume.pdf';
import SampleProject from "./sampleProject";

const AboutMe: React.FC = () => {


  return (
        <>
            <div className="about">
                <div className="about-container">
                    <p className="about-p">👋 Hi there, I’m</p>
                    <p className='nama'>William Widjaja</p>
                    <p className="about-p">Software Engineer</p>
                    <button
                        onClick={() => window.open(Resume, '_blank')}
                        className="my-button"
                        >
                        My Resume
                    </button>
                    <SocialMedia />  
                </div>
                
                <div className="profilepic-container">
                    <img src='../assets/react.svg' alt="Profile picture" className="profilepic" />
                </div>
            </div>

            <div className="summary">
                <p className="summary-p">About Me</p>
                <p className="summary-text">
                    I’m a Computer Science graduate from San Francisco State University who’s passionate about problem solving and continuous learning. I see every new project as a chance to learn something new — whether it’s exploring a new framework or optimizing backend performance. I bring this mindset to building full-stack applications with React, Next.js, Node/Express, and Flask.
                </p>

                <div className="tech-stack">
                    <p className="tech-stack-p">Programming language: Javascript, Python, C++, Java, HTML/CSS, SQL</p>
                    <p className="tech-stack-p"> Tech Stack: React, React Native, Express.js, Next.js, Django, FastAPI, MongoDB, MySQL, Pytorch</p>
                    <p className="tech-stack-p">Tools: Git, AWS, Postman, Figma</p>
                </div>
            </div>

            <SampleProject />


        </>
         
  );
};

export default AboutMe;