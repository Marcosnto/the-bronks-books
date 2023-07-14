export type Cart = Record<number, StoreBookProps>;

export type StoreBookProps = {
  id: number;
  title: string;
  imageLink: string;
  price: string;
  quantity: number;
};

export type StoreProps = {
  quantityItems: number;
  cart: Cart;
  newBook: StoreBookProps;
  addToCart: () => void;
  setNewBook: (book: StoreBookProps) => void;
  getCartItems: () => StoreBookProps[];
  addItemToCar: (id: number) => void;
  removeItem: (id: number) => void;
  deleteItem: (id: number) => void;
  getTotalValue: () => number;
};
