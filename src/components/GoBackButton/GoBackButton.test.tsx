import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import GoBackButton from ".";

describe("GoBackButton", () => {
  test("should show on the page", () => {
    render(
      <BrowserRouter>
        <GoBackButton to="/" />
      </BrowserRouter>,
    );

    const btn = screen.getByText(/voltar/i);

    expect(btn).toBeInTheDocument();
  });
});
