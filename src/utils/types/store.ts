export type StoreBookProps = {
  id: number | null;
  title: string;
  imageLink: string;
  price: string;
  quantity: number;
};

export type StoreProps = {
  quantityItems: number;
  cart: StoreBookProps[];
  newBook: StoreBookProps;
  addToCart: () => void;
  setNewBook: (book: StoreBookProps) => void;
};
