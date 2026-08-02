import "./styles/App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./data/projects";

function App() {
  const [projectList, setProjectList] = useState(projects);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectList.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const addProject = (newProject) => {
    setProjectList([...projectList, newProject]);
  };

  return (
    <div className="app">
      <Header />

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <ProjectForm addProject={addProject} />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
