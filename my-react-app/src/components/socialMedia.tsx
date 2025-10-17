import React from "react";
import "./components.css"; // optional if you have specific styles for the navbar
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

const SocialMedia: React.FC = () => {

    // const iconStyle = "text-black text-2xl cursor-pointer transition-transform duration-200 hover:scale-110"; // stays black, slight zoom on hover;

    return (
            <div className="social-media-container">
                <a href="mailto:william.widjaja0903@gmail.com">
                    <FaEnvelope className="iconStyle" />
                </a>
                <a href="https://github.com/willi301" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="iconStyle" />
                </a>
                <a href="https://www.linkedin.com/in/widjaja-william" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="iconStyle"  />
                </a>
                
            
            </div>
    );
    };

export default SocialMedia;