import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #6c46ce;
  height: 5em;
  display: flex;
  justify-content: space-between;
  /* padding: 0.5rem calc((100vw - 1000px) / 2); */
  padding: 0 3em 0 3em;
  z-index: 10;
`

export const NavLink = styled(Link)`
  color: #f8f8f8;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #f8f8f8;
  }

  &:hover {
    color: #ceabfc;
    transition: all .3s ease;
  }
`

export const ExtendedNavLink = styled(Link)`
  color: #f8f8f8;
  text-decoration: none;
  align-items: center;
  padding: 5em 2em 2em 2em;
  cursor: pointer;
`

export const Bars = styled(FaBars)`
  display: none;
  color: #f8f8f8;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoText = styled.h1`
  
`

export const LogoImg = styled.img`
  width: 20em;
  height: 4em;
`

export const ExtendendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  text-align: center;

  @media (min-width: 768px) {
    display: none;
  }
`
