import { Book } from "../utils/types/components";

const postBook = async (book: Book) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  };

  const apiRes = await fetch(
    `${process.env.REACT_APP_PUBLIC_BASE_URL}/books`,
    options,
  );

  if (!apiRes.ok) {
    throw new Error(`Something wron on Book post`);
  }

  return apiRes.json();
};

export default postBook;
