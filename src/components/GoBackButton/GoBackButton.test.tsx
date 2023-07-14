import { screen } from "@testing-library/react";

import GoBackButton from ".";
import { renderWithDeps } from "../../utils/test";

describe("GoBackButton", () => {
  test("should show on the page", () => {
    renderWithDeps(<GoBackButton to="/" />);

    const btn = screen.getByText(/voltar/i);

    expect(btn).toBeInTheDocument();
  });
});
