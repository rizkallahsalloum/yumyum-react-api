import React, { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import HeaderInside from '../components/HeaderInside';
import { Container, FlexContainer } from '../global-styles';
import styled from 'styled-components';
import { DefaultButton } from '../components/Button';
import { useHistory } from 'react-router-dom';
import { useTitle } from '../Hooks';

const SingleRecipe = () => {
  useTitle('YumYum - Recipes');

  const { id } = useParams();
  const API_ENDPOINT_INFO = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`;
  const [recipe, setRecipe] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });

  const history = useHistory();

  const fetchRecipe = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    if (data.results === 402) {
      setError({ show: true, msg: data.status.error });
    } else {
      setRecipe(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipe(`${API_ENDPOINT_INFO}&information=${id}`);
  }, [id]);
  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to recipes
        </Link>
      </div>
    );
  }

  const { image, title, extendedIngredients, summary, instructions } = recipe;
  return (
    <>
      <HeaderInside />
      <Container>
        <FlexContainerRow key={id} className="spacer-20">
          <RecipeImg>
            <img src={image} alt={title} />
          </RecipeImg>
          <RecipeInfo>
            <h2>{title}</h2>
            <ul>
              {extendedIngredients.map(({ id, original }) => (
                <li key={id}>{original}</li>
              ))}
            </ul>
            <p dangerouslySetInnerHTML={{ __html: summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: instructions }}></p>
            <DefaultButton onClick={history.goBack} large>
              Back
            </DefaultButton>
          </RecipeInfo>
        </FlexContainerRow>
      </Container>
    </>
  );
};

const FlexContainerRow = styled(FlexContainer)`
  flex-wrap: nowrap;
  grid-column-gap: 8rem;
  position: relative;
  z-index: 100;
  @media screen and (max-width: 720px) {
    margin-top: 5rem;
  }
`;
const RecipeImg = styled.div`
  img {
    border-radius: 3rem;
    @media screen and (max-width: 720px) {
      width: 100%;
    }
  }
`;
const RecipeInfo = styled.div`
  h2 {
    color: var(--clr-secondary);
  }
  ul,
  p {
    margin: 1.5rem 0;
  }
  @media screen and (max-width: 720px) {
    ul,
    ol {
      list-style-position: inside;
    }
  }
`;

export default SingleRecipe;
