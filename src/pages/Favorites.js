import React, { useContext } from 'react';
import { useGlobalContext } from '../context';
import RecipeCard from '../components/RecipeCard';
import HeaderInside from '../components/HeaderInside';
import styled from 'styled-components';
import { Container, FlexContainer, TitlePage } from '../global-styles';
const Favorites = () => {
  const { favorites } = useGlobalContext(useContext);

  return (
    <>
      <div>
        <HeaderInside />
        <Container>
          <div className="spacer-10">
            <TitlePage>Favorites</TitlePage>

            {favorites.length > 0 ? (
              <FlexContainer key={favorites.id}>
                {favorites.map((recipe) => (
                  <RecipeCard recipe={recipe} />
                ))}
              </FlexContainer>
            ) : (
              <MessageText>No recipes added to favorites</MessageText>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

const MessageText = styled.h2`
  text-align: center;
  color: var(--clr-tertiary);
`;
export default Favorites;
