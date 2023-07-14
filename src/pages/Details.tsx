import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import fetchBookDetails from "../api/fetchBookDetails";
import BookDetails from "../components/BookDetails";

import { Book } from "../utils/types/components";

export default function Details() {
  const { bookID } = useParams();

  const { data, isLoading, isError } = useQuery<Book | undefined>({
    queryKey: ["book", bookID],
    queryFn: () => fetchBookDetails(bookID),
  });

  if (isLoading) {
    return <h1>carregando...</h1>;
  }

  if (isError) {
    return <h1>erro</h1>;
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
