import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import fetchBookDetails from "../api/fetchBookDetails";
import BookDetails from "../components/BookDetails";
import DisplayMessage from "../components/DisplayMessage";

import { Book } from "../utils/types/components";

export default function Details() {
  const { bookID } = useParams();

  const { data, isLoading, isError } = useQuery<Book | undefined>({
    queryKey: ["book", bookID],
    queryFn: () => fetchBookDetails(bookID),
  });

  if (isLoading) {
    return <DisplayMessage message="carregando..." />;
  }

  if (isError) {
    return (
      <DisplayMessage message="Ocorreu um erro ao buscar os dados deste livro :(" />
    );
  }

  if (data) {
    const {
      id,
      author,
      year,
      imageLink,
      title,
      price,
      country,
      language,
      pages,
    } = data;

    return (
      <BookDetails
        id={id}
        author={author}
        year={year}
        imageLink={imageLink}
        title={title}
        price={price}
        country={country}
        language={language}
        pages={pages}
      />
    );
  }
}
