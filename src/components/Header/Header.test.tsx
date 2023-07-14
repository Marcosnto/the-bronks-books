import { render, screen } from "@testing-library/react";
import Header from ".";

import { BrowserRouter } from "react-router-dom";

describe("header", () => {
  test("should render with correct name", () => {
    render(
      <BrowserRouter>
        <Header title="ShopTest" />
      </BrowserRouter>,
    );

    const header = screen.getByText(/ShopTest/i);

    expect(header).toBeInTheDocument();
  });
});
