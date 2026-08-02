import Header from "./components/Header";
import ProjectList from "./components/ProjectList";

import projects from "./data/projects";

function App() {
  return (
    <>
      <Header />

      <ProjectList projects={projects} />
    </>
  );
}

export default App;
