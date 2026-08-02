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

      <input type="text" placeholder="Project Title" />

      <input type="text" placeholder="Image URL" />

      <textarea placeholder="Project Description"></textarea>

      <input type="text" placeholder="Technologies" />

      <input type="text" placeholder="GitHub Link" />

      <input type="text" placeholder="Live Demo Link" />

      <button>Add Project</button>
    </form>
  );
}

export default ProjectForm;
