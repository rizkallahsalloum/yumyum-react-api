import React, { useContext } from 'react';
import { CardStyled, Card, CardBtn, Gradient } from './ResultCard';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';

const RecipeCard = ({ recipe }) => {
  const { removeRecipeFromFavorites } = useGlobalContext(useContext);
  return (
    <>
      <CardStyled key={recipe.id}>
        <Card>
          <Link to={`/recipes/${recipe.id}`}>
            <article>
              <img src={recipe.image} alt={recipe.title} />

              <h4>{recipe.title}</h4>
            </article>
          </Link>
          <Gradient />
          <CardBtn
            className="btn"
            onClick={() => removeRecipeFromFavorites(recipe.id)}
          >
            <FaBookmark />
          </CardBtn>
        </Card>
      </CardStyled>
    </>
  );
};

export default RecipeCard;
