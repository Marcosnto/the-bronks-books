import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("footer", () => {
  test("should render with the correct text", () => {
    render(<Footer />);

    const footer = screen.getByText(/Desenvolvido por Marcos Neto/i);

    expect(footer).toBeInTheDocument();
  });
});
