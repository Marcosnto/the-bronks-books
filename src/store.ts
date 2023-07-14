import { create } from "zustand";
import { StoreBookProps, StoreProps } from "./utils/types/store";

const DefaultBook = {
  id: null,
  title: "",
  imageLink: "",
  price: "",
  quantity: 0,
};

const addToCart = (
  books: StoreBookProps[],
  book: StoreBookProps,
): StoreBookProps[] => [...books, book];

const useStore = create<StoreProps>((set) => ({
  quantityItems: 0,
  cart: [],
  newBook: DefaultBook,
  addToCart() {
    set((state) => ({
      ...state,
      cart: addToCart(state.cart, state.newBook),
      newBook: DefaultBook,
      quantityItems: state.quantityItems + 1,
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
