import { screen } from "@testing-library/react";

import { books } from "../../../db.json";
import { renderWithDeps } from "../../utils/test";

import { Book } from "../../utils/types/components";

import BookDetails from ".";

const book = books.at(0) as Book;

describe("BookDetails", () => {
  test("should render the page with the correct text", () => {
    renderWithDeps(
      <BookDetails
        id={book.id}
        author={book.author}
        year={book.year}
        imageLink={book.imageLink}
        title={book.title}
        price={book.price}
        country={book.country}
        language={book.language}
        pages={book.pages}
      />,
    );

    const bookDetails = screen.getByText(/Especificações/i);
    expect(bookDetails).toBeInTheDocument();
  });
});
