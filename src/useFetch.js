import React, { useState, useEffect } from 'react';
export const API_ENDPOINT = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`;

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState(null);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const fetchRecipes = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data.message);
      // console.log(data.status);
      if (data.results.length > 0) {
        setData(data.results || data);
        setError({ show: false, message: '' });
      } else {
        setError({ show: true, message: 'Recipe not found, please try again' });
      }
      setIsLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      setData(data);
    }
  }, []);
  useEffect(() => {
    fetchRecipes(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, data };
};

export default useFetch;
