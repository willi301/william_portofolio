import React, { useState } from "react";
import projects from "../data/projectData.json";
import ProjectCard from "../components/projectCard";
import TagBadge from "../components/TagBadge";
import "../components/components.css";

const Project: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories
  const categories = Array.from(new Set(projects.map(p => p.category)));

  const filteredProjects =
  selectedCategory === null
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* <Navbar /> */}
      <section className="projects-section">
        <div className="projects-container">
          <h1 className="projects-title">My Projects</h1>

          {/* 🔘 Filter bar (TagBadge click-to-filter) */}
          <div className="projects-filters">
            {categories.map((category, idx) => (
              <div
                key={idx}
                onClick={() =>
                  setSelectedCategory((prev) => (prev === category ? null : category))
                }
                className={`cursor-pointer transition ${
                  selectedCategory === category ? "active-filter" : ""
                }`}
              >
                <TagBadge label={category} />
              </div>
            ))}

            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="clear-filter-btn"
              >
                Clear Filter
              </button>
            )}
          </div>


          {/* 🧱 Projects grid */}
          <div className="projects-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))
            ) : (
              <p className="no-results-text">
                No projects found
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
