import { render, screen } from "@testing-library/react";
import ProjectList from "../components/ProjectList";

const mockProjects = [
  {
    id: 1,
    title: "Netflix Clone",
    image: "https://picsum.photos/300",
    description: "Movie streaming app",
    technologies: "React",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "Weather App",
    image: "https://picsum.photos/301",
    description: "Weather forecast app",
    technologies: "JavaScript",
    github: "https://github.com",
    live: "https://example.com",
  },
];

test("renders all projects", () => {
  render(<ProjectList projects={mockProjects} />);

  expect(screen.getByText("Netflix Clone")).toBeInTheDocument();

  expect(screen.getByText("Weather App")).toBeInTheDocument();
});
test("renders the correct number of project cards", () => {
  render(<ProjectList projects={mockProjects} />);

  const headings = screen.getAllByRole("heading");

  expect(headings).toHaveLength(2);
});