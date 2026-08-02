import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
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
    <>
      <Header />

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <ProjectList projects={filteredProjects} />
    </>
  );
}

export default App;
