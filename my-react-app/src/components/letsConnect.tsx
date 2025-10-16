import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./components.css"; // optional if you have specific styles for the navbar
import ProjectCard from "./projectCard";
import chillmateImg from '../assets/chillmatecover.jpg';
import { useNavigate } from "react-router-dom";

const LetsConnect: React.FC = () => {

  return (
        <>

            <div className="lets-connect">
                
                <div className="lets-connect-container">
                    <p className="lets-connect-title">
                        Let's Connect
                    </p>

                    <div className="lets-connect-social">
                        <p>📧: william.widjaja0903@gmail.com</p>
                        <p>📱: 628-226-8678</p>
                        <p>💼: <a href="https:\\www.linkedin.com/in/widjaja-william">www.linkedin.com/in/widjaja-william</a></p>
                        <p>💻: <a href="https:\\github.com/willi301">github.com/willi301</a></p>
                    </div>
                </div>

                <div className="profilepic-container">
                    <img src='../assets/react.svg' alt="Profile picture" className="profilepic" />
                </div>

            </div>

        </>
  )
};

export default LetsConnect;