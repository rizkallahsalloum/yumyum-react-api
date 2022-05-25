import React from 'react';

import { useGlobalContext } from '../context';

import Recipes from '../components/Recipes';

import Header from '../components/Header';

const Home = () => {
  const { recipes, addFavoriteRecipe } = useGlobalContext();
  return (
    <main>
      <Header />
      <Recipes recipes={recipes} handleFavoritesClick={addFavoriteRecipe} />
    </main>
  );
};

export default Home;
