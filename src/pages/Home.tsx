import { useQuery } from "react-query";

import fetchBooks from "../api/fetchBooks";

import CardCollection from "../components/CardCollection";
import DisplayMessage from "../components/DisplayMessage";

export default function Home() {
  const { data, isLoading, isError } = useQuery(["books"], fetchBooks);

  if (isLoading) {
    return <DisplayMessage message="carregando..." />;
  }

  if (isError) {
    return (
      <DisplayMessage message="Ocorreu um erro ao carregar dos dados :(" />
    );
  }

  return <CardCollection data={data} />;
}
