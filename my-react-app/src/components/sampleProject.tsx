import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./components.css"; // optional if you have specific styles for the navbar
import ProjectCard from "./projectCard";
import chillmateImg from '../assets/chillmatecover.jpg';
import bitsbazaar from '../../public/image/bitsbazaar.jpg'
import { useNavigate } from "react-router-dom";

const SampleProject: React.FC = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/projects"); // this goes to /projects
    };


  return (
        <>

            <div className="sample-project-container">
                <p className="sample-project-title">Featured Projects</p>
                
                <div className="sample-project-container-image">
                    <ProjectCard 
                        image={chillmateImg}
                        title="ChillMate"
                        description="A web app designed to assist students’ mental health. Features include journaling and a chatbot."
                        link="https://github.com/willi301/Chillmate-project"
                        tech={["React", "Python", "MongoDB", "Django", "FastAPI"]}
                    />

                    <ProjectCard 
                        image={bitsbazaar}
                        title="BitsBazaar"
                        description="E-commerce website for buying and selling tech gadgets"
                        link="https://github.com/willi301/BitsBazaar"
                        tech={["React", "JavaScript", "MongoDB", "Next.js"]}
                    />

                </div>

                <button onClick={handleClick} className="sample-project-button">More Projects</button>
            </div>

                
        </>
         
  );
};

export default SampleProject;