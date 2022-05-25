import React, { useState, useContext, useEffect, useReducer } from 'react';
import useFetch from './useFetch';
import AppReducer from './AppReducer';

export const API_ENDPOINT = `https://api.spoonacular.com/recipes/autocomplete?number=10?apiKey=${process.env.REACT_APP_API_KEY}`;

const initialState = {
  favorites: localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites'))
    : [],
};

const AppContext = React.createContext(initialState);
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('middle eastern');
  const [searchTerm, setSearchTerm] = useState('');
  const { isLoading, error, data: recipes } = useFetch(`&query=${query}`);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addRecipeToFavorites = (recipe) => {
    dispatch({ type: 'ADD_RECIPE_TO_FAVORITES', payload: recipe });
  };

  const removeRecipeFromFavorites = (id) => {
    dispatch({ type: 'REMOVE_RECIPE_FROM_FAVORITES', payload: id });
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }, [state]);

  return (
    <AppContext.Provider
      value={{
        favorites: state.favorites,
        isLoading,
        error,
        recipes,
        query,
        setQuery,
        searchTerm,
        setSearchTerm,
        addRecipeToFavorites,
        removeRecipeFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
