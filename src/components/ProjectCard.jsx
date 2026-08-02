import "../styles/ProjectCard.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />

      <h2>{project.title}</h2>

      <p>{project.description}</p>

      <p>
        <strong>Technologies:</strong> {project.technologies}
      </p>

      <div className="buttons">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        <a href={project.live} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
