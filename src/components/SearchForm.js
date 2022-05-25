import React from 'react';
import { useGlobalContext } from '../context';
import styled from 'styled-components';
import { RiSearch2Line } from 'react-icons/ri';

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()}>
        <h3>search recipes</h3>
        <h6>Why use Google when you have us</h6>
        <InputStyled>
          <RiSearch2Line />
          <input
            type="text"
            value={query}
            placeholder="Search recipes"
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputStyled>

        <p>Search and save your favorites recipes</p>
        <Error>{error.show && <div>{error.message}</div>}</Error>
      </Form>
    </>
  );
};

const Form = styled.form`
  background-color: var(--clr-white);
  position: relative;
  top: -15rem;
  max-width: 50vw;
  padding: 2rem 3rem;
  z-index: 200;
  filter: drop-shadow(rgba(141, 141, 141, 0.5) 1px 20px 20px);
  -webkit-filter: drop-shadow(rgba(141, 141, 141, 0.5) 1px 20px 20px);

  h3 {
    text-transform: capitalize;
    margin-bottom: 0.5rem;
    color: var(--clr-secondary);
  }
  h6 {
    text-transform: capitalize;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    padding-top: 2rem;
    font-size: 1.4rem;
    color: var(--clr-black);
  }
  @media screen and (max-width: 720px) {
    max-width: 100%;
    top: -5rem;
  }
`;
const InputStyled = styled.div`
  input {
    background: var(--clr-light-gray);
    padding: 1rem 2rem;
    width: 100%;
    height: 5rem;
    border-radius: 1rem;
    border: none;
    text-indent: 1.5rem;

    color: var(--clr-tertiary);
    :focus {
      border-color: var(--clr-secondary);
      box-shadow: 0 0 8px 0 var(--clr-secondary);
    }
  }
  position: relative;
  & > svg {
    position: absolute;
    left: 1rem;
    top: 1.8rem;
    transition: 0.3s;
  }
`;
const Error = styled.span`
  padding-top: 2rem;
  display: block;
  font-size: 1.4rem;
  color: red;
`;
export default SearchForm;
