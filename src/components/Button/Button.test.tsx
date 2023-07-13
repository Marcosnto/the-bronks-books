import { render, screen } from "@testing-library/react";
import Button from ".";

describe("button", () => {
  test("should render with correct label", () => {
    render(<Button label="btn test" onClick={() => console.log("test")} />);

    const btn = screen.getByText(/btn test/i);

    expect(btn).toBeInTheDocument();
  });
});
