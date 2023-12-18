import { useState, useEffect } from 'react';

export default function App() {
  const url = 'https://fakestoreapi.com/products';

  const [data, setData] = useState([]);
  const [error, setError] = useState<null | any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) return <h1 className='loading'>Loading...</h1>;
  if (error) return <h1 className='error'>Error...{error.message}</h1>;

  return <div>{data && data?.map((el: any) => <p>{el.title}</p>)}</div>;
}
