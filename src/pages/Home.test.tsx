import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders hello world react link", () => {
  render(<Home />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
