import {
Nav,
NavLink,
NavMenu,
Bars,
LogoImg,
LogoText
} from '../styles/NavbarStyle';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <LogoText>Instituto Arte em Movimento Ana Zucchi</LogoText>
                {/* <LogoImg src="/images/logo_escola.png" /> */}
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/quem-somos' >
                    Quem Somos
                </NavLink>
                <NavLink to='/parceiros' >
                    Parceiros
                </NavLink>
                <NavLink to="/contato">
                    Contato
                </NavLink>
                <NavLink to="/apoie">
                    Nos Apoie!
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;
