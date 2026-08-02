import { render, screen } from "@testing-library/react";
import ProjectCard from "../components/ProjectCard";

const mockProject = {
  id: 1,
  title: "Netflix Clone",
  image: "https://picsum.photos/300",
  description: "Movie streaming website",
  technologies: "React",
  github: "https://github.com",
  live: "https://example.com",
};

test("renders project information", () => {
  render(<ProjectCard project={mockProject} />);

  expect(screen.getByText("Netflix Clone")).toBeInTheDocument();

  expect(screen.getByText("Movie streaming website")).toBeInTheDocument();

  expect(screen.getByText("React")).toBeInTheDocument();

  expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();

  expect(screen.getByRole("link", { name: /live demo/i })).toBeInTheDocument();
});
