import { render, screen } from "@testing-library/react";
import Header from ".";

describe("header", () => {
  test("should render with correct name", () => {
    render(<Header title="ShopTest" />);

    const header = screen.getByText(/ShopTest/i);

    expect(header).toBeInTheDocument();
  });
});
