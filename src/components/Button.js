import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
export const DefaultButton = styled.button`
  background: var(--clr-secondary);
  color: var(--clr-white);
  border: none;
  border-radius: 0.25rem;
  padding: 1rem 3rem;
  margin-right: 1rem;
  text-align: center;
  text-decoration: none;
  font-size: 1.4rem;
  text-transform: capitalize;
  transition: var(--transition);
  cursor: pointer;
  padding: 0.25rem;
  display: block;
  width: 200px;
  &:hover {
    background: var(--clr-primary);
  }
  // CSS Helper function
  ${({ large }) =>
    large
      ? css`
          padding: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        `
      : css`
          padding: 0.5rem;
          font-size: 1rem;
          font-weight: 400;
        `}
`;

// Extending button
export const HipsterButton = styled(DefaultButton)`
  width: 150px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
`;
export const LinkButton = styled(Link)`
  background: var(--clr-secondary);
  color: var(--clr-white);
  padding: 1rem 3rem;
  display: inline-block;
  margin-right: 1rem;
  text-align: center;
  text-decoration: none;
  font-size: 1.4rem;
  text-transform: capitalize;
  transition: var(--transition);
  &:hover {
    background: var(--clr-primary);
  }
`;
