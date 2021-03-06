import React from 'react';

import { useGlobalContext } from '../context';

import Recipes from '../components/Recipes';

import Header from '../components/Header';
import { useTitle } from '../Hooks';

const Home = () => {
  useTitle('YumYum - Recipes for you');
  const { recipes, addFavoriteRecipe } = useGlobalContext();
  return (
    <>
      <Header />
      <Recipes recipes={recipes} handleFavoritesClick={addFavoriteRecipe} />
    </>
  );
};

export default Home;
