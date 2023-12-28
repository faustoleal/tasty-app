import { useEffect, useState } from "react";

export default function useFetch(url, params) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "395c12f2b6mshca55d9409547ae4p1171c6jsn739728361613",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [params]);

  return { data, error, loading };
}
