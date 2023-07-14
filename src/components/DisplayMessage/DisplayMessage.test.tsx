import { render, screen } from "@testing-library/react";

import DisplayMessage from ".";

describe("Display Message", () => {
  test("should render with message", async () => {
    render(<DisplayMessage message="Message test" />);

    const component = await screen.findByText(/message test$/i);

    expect(component).toBeInTheDocument();
  });
});
