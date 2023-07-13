const fetchBookDetails = async (bookID: string | undefined) => {
  const apiRes = await fetch(
    `${process.env.REACT_APP_PUBLIC_BASE_URL}/books/${bookID}`,
  );

  if (!apiRes.ok) {
    throw new Error(`Something wron on Book Details fetch`);
  }

  return apiRes.json();
};

export default fetchBookDetails;
