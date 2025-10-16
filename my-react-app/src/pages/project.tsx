import Navbar from '../components/navbar.tsx'
import projectsData from "../data/projectData.json";
import type { Project } from "../types/project";
import ProjectCard from "../components/projectCard";
import "../components/components.css";

function Project() {
    
    const projects: Project[] = projectsData;

    return (
        <>
            <Navbar />
            <section className="projects-section">
                <div className="projects-container">
                    <h1 className="projects-title">My Projects</h1>
                    
                    <div className="projects-grid">
                        {projects.map((project, idx) => (
                            <ProjectCard key={idx} {...project} />
                        ))}
                    </div>
                </div>
            </section>


        </>
        
    )
}

export default Project