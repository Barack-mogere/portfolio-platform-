import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("calls setSearchTerm when the user types", () => {
  const setSearchTerm = vi.fn();

  render(<SearchBar searchTerm="" setSearchTerm={setSearchTerm} />);

  const input = screen.getByPlaceholderText(/search projects/i);

  fireEvent.change(input, {
    target: { value: "React" },
  });

  expect(setSearchTerm).toHaveBeenCalled();
});
