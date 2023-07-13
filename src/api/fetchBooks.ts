const fetchBooks = async () => {
  const apiRes = await fetch(`${process.env.REACT_APP_PUBLIC_BASE_URL}/books`);

  if (!apiRes.ok) {
    throw new Error(`Something wron on Books fetch`);
  }

  return apiRes.json();
};

export default fetchBooks;
