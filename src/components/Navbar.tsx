import { useState } from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  Bars,
  LogoText,
  ExtendendContainer,
  ExtendedNavLink
} from '../styles/NavbarStyle';

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)

  return (
    <>
      <Nav>
        <NavLink to="/">
          <LogoText>Instituto Arte em Movimento Ana Zucchi</LogoText>
        </NavLink>

        <Bars onClick={() => { setExtendNavbar((curr) => !curr) }} />  {/* set the value to the opposite */}

        <NavMenu>
          <NavLink to='/quem-somos' >
            Quem Somos
          </NavLink>
          <NavLink to='/parceiros' >
            Parceiros
          </NavLink>
          <NavLink to='/portal-da-transparencia'>
            Transparência
          </NavLink>
          <NavLink to="/contato">
            Contato
          </NavLink>
          <NavLink to="/apoie">
            Nos Apoie!
          </NavLink>
        </NavMenu>
      </Nav>

      {extendNavbar && (
        <ExtendendContainer>
          <ExtendedNavLink to='/quem-somos'>
            Quem Somos
          </ExtendedNavLink>
          <ExtendedNavLink to='/parceiros' >
            Parceiros
          </ExtendedNavLink>
          <ExtendedNavLink to='/portal-da-transparencia'>
            Transparência
          </ExtendedNavLink>
          <ExtendedNavLink to="/contato">
            Contato
          </ExtendedNavLink>
          <ExtendedNavLink to="/apoie">
            Nos Apoie!
          </ExtendedNavLink>
        </ExtendendContainer>
      )}
    </>
  );
};

export default Navbar;
