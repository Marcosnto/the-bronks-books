import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from ".";

describe("Card", () => {
  test("should render with correct name", async () => {
    render(
      <BrowserRouter>
        <Card
          id={1}
          author="Marcos"
          title="Book Test 1"
          imageLink="https://en.wikipedia.org/wiki/Things_Fall_Apart"
          year={1999}
          price="1.00"
        />
      </BrowserRouter>,
    );

    const cardImage: HTMLImageElement = await screen.findByRole("img", {
      name: /book test 1$/i,
    });

    expect(cardImage.alt).toEqual("Capa do livro Book Test 1");
  });
});
