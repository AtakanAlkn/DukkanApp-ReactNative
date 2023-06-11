import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const {data: productsData} = await axios.get(url);
      setProducts(productsData);
      setLoading(false);
    } catch (errors) {
      const {message} = errors;
      setError(message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {error, loading, products};
};

export default useFetch;
