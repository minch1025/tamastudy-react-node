import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface Props {}

const AppNav = (props: Props) => {
  return (
    <NavWrapper>
      <NavList>
        <CustomLink to={'/posts'} activeClassName={'nav__link-active'}>
          POST
        </CustomLink>
      </NavList>
      <NavList>
        <CustomLink to={'/studies'} activeClassName={'nav__link-active'}>
          STUDY
        </CustomLink>
      </NavList>
      <NavList>
        <CustomLink to={'/contact'} activeClassName={'nav__link-active'}>
          CONTACT
        </CustomLink>
      </NavList>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* background-color: red; */
`;

const NavList = styled.li`
  justify-self: center;
  list-style: none;
`;

const CustomLink = styled(NavLink)`
  display: block;
  color: inherit;
  text-decoration: none;
  font-family: 'Share', cursive;
  font-size: 11px;
  box-sizing: border-box;
  ${(props) =>
    css`
      color: ${props.theme.colors.text.darkSecondary};
      padding: ${props.theme.space}px 0;
    `}

  &.nav__link-active {
    color: ${(props) => props.theme.colors.base.black};
    box-sizing: border-box;
    border-bottom: 1px solid ${(props) => props.theme.colors.base.black};
  }
`;

export default AppNav;
