import { render, screen, fireEvent } from "@testing-library/react";
import ProjectForm from "../components/ProjectForm";

test("submits a new project", () => {
  const addProject = vi.fn();

  render(<ProjectForm addProject={addProject} />);

  fireEvent.change(screen.getByPlaceholderText(/project title/i), {
    target: { value: "Netflix Clone" },
  });

  fireEvent.change(screen.getByPlaceholderText(/image url/i), {
    target: { value: "https://picsum.photos/300" },
  });

  fireEvent.change(screen.getByPlaceholderText(/project description/i), {
    target: { value: "Movie streaming website" },
  });

  fireEvent.change(screen.getByPlaceholderText(/technologies/i), {
    target: { value: "React" },
  });

  fireEvent.change(screen.getByPlaceholderText(/github link/i), {
    target: { value: "https://github.com" },
  });

  fireEvent.change(screen.getByPlaceholderText(/live demo link/i), {
    target: { value: "https://example.com" },
  });

  fireEvent.click(
    screen.getByRole("button", {
      name: /add project/i,
    }),
  );

  expect(addProject).toHaveBeenCalledTimes(1);
});
