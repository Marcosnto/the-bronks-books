import { useQuery } from "react-query";
import fetchBookDetails from "../api/fetchBookDetails";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import BookDetails from "../components/BookDetails";

export default function Details() {
  const { bookID } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["book", bookID],
    queryFn: () => fetchBookDetails(bookID),
  });

  if (isLoading) {
    return <h1>carregando...</h1>;
  }

  if (isError) {
    return <h1>erro</h1>;
  }

  return (
    <>
      <Header title="BookStore" />
      <BookDetails data={data} />
    </>
  );
}
