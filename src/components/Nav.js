import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Nav = () => {
  const { favorites } = useGlobalContext();
  return (
    <>
      <NavStyled>
        <Logo to={'/'}>
          <span>Yum</span>
          <span>Yum</span>
        </Logo>
        <NavItems>
          <NavItem exact to="/">
            Home
          </NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/favorites">
            Favorites{' '}
            <FavoritesItems>
              {favorites.length === 1}
              {favorites.length}{' '}
            </FavoritesItems>
          </NavItem>
        </NavItems>
      </NavStyled>
    </>
  );
};
const activeClassName = 'nav-item-active';
const NavStyled = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  font-weight: 600;
  font-family: var(--tertiary-font-family);
  color: var(--clr-primary);
  span:nth-child(even) {
    color: var(--clr-tertiary);
  }
  @media screen and (max-width: 720px) {
    margin-bottom: 3rem;
  }
`;
const FavoritesItems = styled.div`
  background-color: var(--clr-primary);
  color: var(--clr-black);
  border-radius: 5rem;
  height: 2em;
  width: 2em;
  position: absolute;
  font-size: 1.4rem;
  line-height: 2;
  font-weight: 700;
  text-align: center;
  top: -1.5rem;
  right: -2.5rem;
`;
export const NavItems = styled.div`
  margin-top: 0;
  font-weight: var(--secondary-font-weight);
`;
export const NavItem = styled(NavLink).attrs({
  activeClassName,
})`
  color: var(--clr-black);
  transition: 250ms;
  display: inline-block;
  position: relative;

  &:not(:last-child) {
    margin-right: 6rem;
  }
  &:hover {
    color: var(--clr-primary);
    transform: scaleX(1);
    transform-origin: center center;
  }
  &::after {
    color: var(--clr-primary);
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--clr-primary);
    transform-origin: center center;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    color: var(--clr-primary);
    transform: scaleX(1);
    transform-origin: center center;
  }
  &.${activeClassName} {
    color: var(--clr-primary);
    transform: scaleX(1);
    transform-origin: center center;
  }
  &.${activeClassName}::after {
    color: var(--clr-primary);
    transform: scaleX(1);
    transform-origin: center center;
  }
`;
export default Nav;
