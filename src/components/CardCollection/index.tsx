import { useQuery } from "react-query";
import fetchBooks from "../../api/fetchBooks";
import Card from "../Card";
import { CardProps } from "../../utils/types/components";
import DisplayMessage from "../DisplayMessage";

export default function CardCollection() {
  const { data, isLoading, isError } = useQuery(["books"], fetchBooks);

  if (isLoading) {
    return <DisplayMessage message="carregando..." />;
  }

  if (isError) {
    return (
      <DisplayMessage message="Ocorreu um erro ao carregar dos dados :(" />
    );
  }

  return (
    <div
      className="
    grid 
    justify-items-center 
    gap-5
    grid-cols-2 
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    "
    >
      {data.map((book: CardProps) => (
        <Card
          id={book.id}
          key={book.id}
          author={book.author}
          title={book.title}
          imageLink={book.imageLink}
          year={book.year}
          price={book.price}
        />
      ))}
    </div>
  );
}
