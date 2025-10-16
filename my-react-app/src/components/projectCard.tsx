import React from "react";
import TagBadge from "./TagBadge";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  tech: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  link,
  tech,
}) => {
  return (
    <div className="project-card">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="project-card-image"
        loading="lazy"
      />

      {/* Content */}
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">
          {description}
        </p>

        {/* Project Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
          View Project →
        </a>

        {/* Tech Stack */}
        <div className="project-card-tech">
          {tech.map((item, index) => (
            <TagBadge key={index} label={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;