import { Link } from "react-router-dom";
import Button from "../Button";
import { CardProps } from "../../utils/types/components";
import useStore from "../../store";

export default function Card({
  id,
  author,
  title,
  imageLink,
  year,
  price,
}: CardProps) {
  const store = useStore();

  return (
    <div
      key={id}
      className="
    bg-slate-100 
      w-60
      flex 
      flex-col 
      gap-3
      p-3 
      rounded-lg
      items-center
      justify-evenly
      "
    >
      <Link to={`book/${id}`}>
        <img
          src={imageLink}
          alt={`Capa do livro ${title}`}
          className="w-40 h-40"
        />
      </Link>
      <div className="flex flex-col gap-1 items-center w-auto">
        <Link to={`book/${id}`}>
          <header className="text-md font-light flex-wrap">{title}</header>
        </Link>
        <span className="text-sm text-gray-500">
          {author} - {year}
        </span>
      </div>
      <span className="font-bold text-gray-950">R$ {price}</span>
      <div className="flex flex-col w-full gap-3">
        <Button
          label="Adicionar ao Carrinho"
          onClick={() => {
            store.setNewBook({ id, title, imageLink, price, quantity: 1 });
            store.addToCart();
          }}
        />
        <Button label="Comprar" onClick={() => console.log("comprei")} />
      </div>
    </div>
  );
}
