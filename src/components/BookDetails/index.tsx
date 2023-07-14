import { Book } from "../../utils/types/components";
import Button from "../Button";

import useStore from "../../store";
import GoBackButton from "../GoBackButton";

export default function BookDetails({
  author,
  year,
  imageLink,
  title,
  price,
  country,
  language,
  pages,
}: Book) {
  const store = useStore();

  return (
    <>
      <GoBackButton to="/" />
      <div
        className="
      w-full
      min-h-screen
      flex 
      flex-col
      p-3 
      items-center
      bg-slate-100
      lg:flex-row 
      lg:flex-wrap 
      lg:justify-evenly
      "
      >
        <img
          src={imageLink}
          alt={`Capa do livro ${title}`}
          className="w-6/12 mb-3 sm:w-4/12 lg:w-3/12"
        />
        <div className="w-full rounded-lg p-3 shadow-lg border-2 mb-4 lg:w-5/12">
          <div className="flex flex-col gap-3 items-center w-auto mb-3">
            <header className="text-3xl font-light flex-wrap">{title}</header>
            <span className="text-lg text-gray-500">
              {author} - {year}
            </span>
            <span className="text-3xl font-bold text-gray-950">R$ {price}</span>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <Button
              label="Adicionar ao Carrinho"
              onClick={() => store.addToCart()}
            />
            <Button label="Comprar" onClick={() => console.log("comprei")} />
          </div>
        </div>
        <div className="w-full mt-10 lg:ml-28">
          <h3 className="font-semibold text-2xl mb-5">Especificações</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <b>Author</b>: {author}
            </li>
            <hr className="lg:hidden" />
            <li>
              <b>Ano da edição</b>: {year}
            </li>
            <hr className="lg:hidden" />
            <li>
              <b>País de origem</b>: {country}
            </li>
            <hr className="lg:hidden" />
            <li>
              <b>Idioma</b>: {language}
            </li>
            <hr className="lg:hidden" />
            <li>
              <b>Número de páginas</b>: {pages}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
