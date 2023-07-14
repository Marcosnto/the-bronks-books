import { render, screen } from "@testing-library/react";
import { books } from "../../../db.json";

import { Book } from "../../utils/types/components";

import CartItem from ".";

const book = books.at(0) as Book;

describe("CartItem", () => {
  test("should render with correct name", () => {
    render(
      <CartItem
        imageLink={book.imageLink}
        title={book.title}
        price={book.price}
        quantity={2}
      />,
    );

    const cartItem = screen.getByText(book.title);
    expect(cartItem).toBeInTheDocument();
  });
});
