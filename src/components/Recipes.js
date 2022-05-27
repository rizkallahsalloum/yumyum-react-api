import React from 'react';
import { Container, FlexContainer } from '../global-styles';
import { useGlobalContext } from '../context';

import ResultCard from './ResultCard';

const Recipes = ({ recipes }) => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <Container>
        <FlexContainer className="spacer-20">
          {recipes.map((recipe) => (
            <ResultCard recipe={recipe} key={recipe.id} />
          ))}
        </FlexContainer>
      </Container>
    </>
  );
};

export default Recipes;
