import { useState } from "react";

function ProjectForm() {
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

  return (
    <form>
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

      <button>Add Project</button>
    </form>
  );
}

export default ProjectForm;
