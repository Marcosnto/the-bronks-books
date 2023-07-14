export type ButtonProps = {
  label?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  onClick: () => void;
  disabled?: boolean;
  icon?: JSX.Element;
};

export type CardProps = {
  id: number;
  author: string;
  imageLink: string;
  title: string;
  year: number;
  price: string;
};

export type Book = {
  id: number;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link?: string;
  pages: number;
  title: string;
  year: number;
  price: string;
};

export type CartItemProps = {
  id?: number;
  imageLink: string;
  title: string;
  price: string;
  quantity: number;
};

export type GoBackButtonProps = {
  to: string;
};

export type HeaderProps = {
  title: string;
};
