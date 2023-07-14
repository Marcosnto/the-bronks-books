import Card from "../Card";
import { CardProps } from "../../utils/types/components";

export default function CardCollection({ data }: { data: CardProps[] }) {
  return (
    <div
      className="
        grid 
        justify-items-center 
        gap-5
        grid-cols-1
        min-[527px]:grid-cols-2
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
