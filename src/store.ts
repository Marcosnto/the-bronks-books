import { create } from "zustand";
import { Cart, StoreBookProps, StoreProps } from "./utils/types/store";

const DefaultBook = {
  id: 0,
  title: "",
  imageLink: "",
  price: "",
  quantity: 0,
};

const addToCart = (books: Cart, book: StoreBookProps): Cart => {
  if (books[book.id]) {
    return addItemToCar(books, book.id);
  }

  return { ...books, [book.id]: book };
};

const addItemToCar = (books: Cart, id: number): Cart => {
  books[id].quantity++;

  return books;
};

const removeItem = (books: Cart, id: number): Cart => {
  if (books[id].quantity > 1) {
    books[id].quantity--;

    return books;
  } else {
    return deleteItem(books, id);
  }
};

const deleteItem = (books: Cart, id: number): Cart => {
  if (books[id]) {
    delete books[id];
  }

  return books;
};

const useStore = create<StoreProps>((set) => ({
  quantityItems: 0,
  cart: {},
  newBook: DefaultBook,
  getCartItems() {
    return Object.values(this.cart);
  },
  getTotalValue() {
    return this.getCartItems().reduce(
      (sum: number, book: StoreBookProps) =>
        sum + Number(book.price) * book.quantity,
      0,
    );
  },
  addToCart() {
    set((state) => ({
      ...state,
      cart: addToCart(state.cart, state.newBook),
      newBook: DefaultBook,
      quantityItems: state.quantityItems + 1,
    }));
  },
  addItemToCar(id: number) {
    set((state) => ({
      ...state,
      cart: addItemToCar(state.cart, id),
      quantityItems: state.quantityItems + 1,
    }));
  },
  removeItem(id: number) {
    set((state) => ({
      ...state,
      cart: removeItem(state.cart, id),
      quantityItems: state.quantityItems - 1,
    }));
  },
  deleteItem(id: number) {
    set((state) => ({
      ...state,
      cart: deleteItem(state.cart, id),
      quantityItems: state.quantityItems - 1,
    }));
  },
  setNewBook(book: StoreBookProps) {
    set((state) => ({
      ...state,
      newBook: book,
    }));
  },
}));

export default useStore;
