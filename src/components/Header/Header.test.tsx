import { screen } from "@testing-library/react";
import Header from ".";
import { renderWithDeps } from "../../utils/test";

describe("header", () => {
  test("should render with correct name", () => {
    renderWithDeps(<Header title="ShopTest" />);

    const header = screen.getByText(/ShopTest/i);

    expect(header).toBeInTheDocument();
  });
});
