import React, { useContext } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import { FaRegBookmark } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
const ResultCard = ({ recipe, className }) => {
  const { isLoading, addRecipeToFavorites, favorites } =
    useGlobalContext(useContext);

  let storedRecipe = favorites.find((o) => o.id === recipe.id);

  const favoritesDisabled = storedRecipe ? true : false;

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <CardStyled key={recipe.id} className={className}>
        <Card>
          <Link to={`/recipes/${recipe.id}`}>
            <article>
              <h4>{recipe.title}</h4>

              <img src={recipe.image} alt={recipe.title} />
            </article>
          </Link>
          <Gradient />
          <CardBtn
            className="btn"
            disabled={favoritesDisabled}
            onClick={() => addRecipeToFavorites(recipe)}
          >
            {favoritesDisabled ? <FaBookmark /> : <FaRegBookmark />}
          </CardBtn>
        </Card>
      </CardStyled>
    </>
  );
};

export const CardStyled = styled.div`
  width: 50vw;
  width: 270px;
  @media screen and (max-width: 720px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  @media screen and (max-width: 720px) {
    margin-bottom: 3rem;
  }
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    position: absolute;
    left: 0;
    object-fit: cover;
  }
  h4 {
    width: 100%;
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-size: 1.6rem;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const CardBtn = styled.button`
  position: absolute;
  right: 0;
  z-index: 10;
  background: var(--clr-primary);
  border-radius: 10rem;
  width: 5rem;
  height: 5rem;
  font-size: 1.8rem;
  .btn:disabled {
    opacity: 0.5;
    pointer-events: none;
    background-color: var(--clr-black);
  }
  .btn:disabled svg {
    fill: var(--clr-white);
  }
  &:hover {
    transition: var(--transition);
    background-color: var(--clr-black);
  }
`;
export const Gradient = styled.div`
  z-index: 3;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default ResultCard;
