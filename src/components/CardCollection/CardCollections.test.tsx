import { screen } from "@testing-library/react";
import { renderWithDeps } from "../../utils/test";

import { books } from "../../../db.json";
import { Book } from "../../utils/types/components";

import CardCollection from ".";

const book = books.at(0) as Book;

describe("CardCollection", () => {
  test("should render the loading message", () => {
    renderWithDeps(<CardCollection data={books} />);
    const loading = screen.getByText(book.title);
    expect(loading).toBeInTheDocument();
  });
});
