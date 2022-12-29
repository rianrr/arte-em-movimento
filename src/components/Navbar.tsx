import {
Nav,
NavLink,
NavMenu,
Bars
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
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
