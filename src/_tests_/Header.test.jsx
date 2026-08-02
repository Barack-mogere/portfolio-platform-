import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders the portfolio heading", () => {
  render(<Header />);

  expect(
    screen.getByRole("heading", {
      name: /creative portfolio/i,
    }),
  ).toBeInTheDocument();
});
