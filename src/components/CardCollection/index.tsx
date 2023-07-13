import { useQuery } from "react-query";
import fetchBooks from "../../api/fetchBooks";
import Card from "../Card";
import { CardProps } from "../../utils/types/components";

export default function CardCollection() {
  const { data, isLoading, isError } = useQuery(["books"], fetchBooks);

  if (isLoading) {
    return <h1>carregando...</h1>;
  }

  if (isError) {
    return <h1>erro</h1>;
  }

  return (
    <div
      className="
    grid 
    justify-items-center 
    gap-5
    grid-cols-2 
    sm:grid-cols-3  
    md:grid-cols-4"
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
