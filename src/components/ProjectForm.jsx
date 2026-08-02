import { useState } from "react";

function ProjectForm({ addProject }) {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    technologies: "",
    github: "",
    live: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProject = {
      id: Date.now(),
      ...formData,
    };

    addProject(newProject);

    setFormData({
      title: "",
      image: "",
      description: "",
      technologies: "",
      github: "",
      live: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Project</h2>

      <input
        type="text"
        name="title"
        placeholder="Project Title"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Project Description"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        type="text"
        name="technologies"
        placeholder="Technologies"
        value={formData.technologies}
        onChange={handleChange}
      />

      <input
        type="text"
        name="github"
        placeholder="GitHub Link"
        value={formData.github}
        onChange={handleChange}
      />

      <input
        type="text"
        name="live"
        placeholder="Live Demo Link"
        value={formData.live}
        onChange={handleChange}
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
