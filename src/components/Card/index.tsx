import { Link } from "react-router-dom";
import Button from "../Button";

type CardProps = {
  id: number;
  author: string;
  imageLink: string;
  title: string;
  year: number;
  price: string;
};

export default function Card({
  id,
  author,
  title,
  imageLink,
  year,
  price,
}: CardProps) {
  return (
    <div
      key={id}
      className="
    bg-slate-100 
      w-40 flex 
      flex-col 
      gap-3
      p-3 
      min-w-fit
      rounded-lg"
    >
      <Link to="/">
        <img src={imageLink} alt={`Capa do livro ${title}`} className="w-40" />
      </Link>
      <div className="flex flex-col gap-1">
        <Link to="/">
          <header className="text-md font-light">{title}</header>
        </Link>
        <span className="text-sm text-gray-500">
          {author} - {year}
        </span>
      </div>
      <span className="font-bold text-gray-950">R$ {price}</span>
      <Button label="Comprar" onClick={() => console.log("comprei")} />
    </div>
  );
}
