import {
Nav,
NavLink,
NavMenu,
Bars
} from '../styles/NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <h1>Arte em Movimento</h1>
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
