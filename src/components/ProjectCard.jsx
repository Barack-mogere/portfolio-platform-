import "../styles/ProjectCard.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />

      <div className="project-content">
        <h2>{project.title}</h2>

        <p>{project.description}</p>

        <span className="project-tech">{project.technologies}</span>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href={project.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
