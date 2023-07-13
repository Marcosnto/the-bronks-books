export type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

export type CardProps = {
  id: number;
  author: string;
  imageLink: string;
  title: string;
  year: number;
  price: string;
};

export type BookProps = {
  data: {
    id: number;
    author: string;
    country: string;
    imageLink: string;
    language: string;
    link: string;
    pages: number;
    title: string;
    year: number;
    price: string;
  };
};


export type HeaderProps = {
  title: string;
};
