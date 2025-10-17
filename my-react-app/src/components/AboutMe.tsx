import React from "react";
import "./components.css"; // optional if you have specific styles for the navbar
import SocialMedia from "./socialMedia";
import Resume from '../assets/Software_Engineer_Updated.pdf';
import pic from "../../public/image/profilepic.jpg"
import Project from "../pages/project.tsx";

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
                        <img src={pic} alt="Profile picture" className="profilepic" />
                    </div>
                </div>

                <div className="summary">
                    <p className="summary-p">About Me</p>
                    <p className="summary-text">
                        I’m a Computer Science graduate from San Francisco State University who’s passionate about problem solving and continuous learning. I see every new project as a chance to learn something new — whether it’s exploring a new framework or optimizing backend performance. I bring this mindset to building full-stack applications with React, Next.js, Node/Express, and Flask.
                    </p>
                </div>

                {/* <SampleProject /> */}

                <Project />
        </>
         
  );
};

export default AboutMe;